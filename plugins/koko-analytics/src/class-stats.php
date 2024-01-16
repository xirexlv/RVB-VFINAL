<?php

namespace KokoAnalytics;

class Stats
{
    public function get_totals(string $start_date, string $end_date, int $page = 0): ?object
    {
        global $wpdb;

        // if end date is a future date, cap it at today so that relative differences to previous period are fair
        $today = create_local_datetime('now')->format('Y-m-d');
        if ($end_date > $today) {
            $end_date = $today;
        }
        $previous_start_date = gmdate('Y-m-d', strtotime($start_date) - (strtotime($end_date . ' 23:59:59') - strtotime($start_date)));

        $table = $wpdb->prefix . 'koko_analytics_site_stats';
        $where_a = 's.date >= %s AND s.date <= %s';
        $args_a = array( $start_date, $end_date );
        $where_b = 's.date >= %s AND s.date < %s';
        $args_b = array( $previous_start_date, $start_date );

        if ($page > 0) {
            $table = $wpdb->prefix . 'koko_analytics_post_stats';
            $where_a .= ' AND s.id = %d';
            $where_b .= ' AND s.id = %d';
            $args_a[] = $page;
            $args_b[] = $page;
        }

        $sql                = $wpdb->prepare("SELECT
			        cur.*,
			        cur.visitors - prev.visitors AS visitors_change,
			        cur.pageviews - prev.pageviews AS pageviews_change,
			        cur.visitors / prev.visitors - 1 AS visitors_change_rel,
			        cur.pageviews / prev.pageviews - 1 AS pageviews_change_rel
			    FROM
			        (SELECT COALESCE(SUM(visitors), 0) AS visitors, COALESCE(SUM(pageviews), 0) AS pageviews FROM {$table} s WHERE $where_a) AS cur,
			        (SELECT COALESCE(SUM(visitors), 0) AS visitors, COALESCE(SUM(pageviews), 0) AS pageviews FROM {$table} s WHERE $where_b) AS prev;
			", array_merge($args_a, $args_b));
        return $wpdb->get_row($sql);
    }

    /**
     * Get aggregated statistics (per day or per month) between the two given dates.
     * Without the $page parameter this returns the site-wide statistics.
     *
     * @param string $start_date
     * @param string $end_date
     * @param string $group
     * @param int $page
     * @return array
     */
    public function get_stats(string $start_date, string $end_date, string $group, int $page = 0): array
    {
        global $wpdb;
        if ($group === 'month') {
            $date_format = '%Y-%m';
        } else {
            $date_format = '%Y-%m-%d';
        }

        $table = $wpdb->prefix . 'koko_analytics_site_stats';
        $where = 'd.date >= %s AND d.date <= %s';
        $args = array( $date_format, $start_date, $end_date );

        if ($page > 0) {
            $table = $wpdb->prefix . 'koko_analytics_post_stats';
            $where .= ' AND s.id = %d';
            $args[] = $page;
        }

        $sql = $wpdb->prepare(
            "
                SELECT DATE_FORMAT(d.date, %s) AS date, COALESCE(SUM(visitors), 0) AS visitors, COALESCE(SUM(pageviews), 0) AS pageviews
                FROM {$wpdb->prefix}koko_analytics_dates d
                    LEFT JOIN {$table} s ON s.date = d.date
                WHERE {$where}
                GROUP BY date",
            $args
        );
        $result = $wpdb->get_results($sql);
        return array_map(function ($row) {
            $row->pageviews = (int) $row->pageviews;
            $row->visitors  = (int) $row->visitors;
            return $row;
        }, $result);
    }

    public function get_posts(string $start_date, string $end_date, int $offset = 0, int $limit = 10): array
    {
        global $wpdb;
        $sql = $wpdb->prepare(
            "
                SELECT s.id, SUM(visitors) AS visitors, SUM(pageviews) AS pageviews
                FROM {$wpdb->prefix}koko_analytics_post_stats s
                WHERE s.date >= %s AND s.date <= %s
                GROUP BY s.id
                ORDER BY pageviews DESC, s.id ASC
                LIMIT %d, %d",
            array( $start_date, $end_date, $offset, $limit )
        );
        $results = $wpdb->get_results($sql);

        return array_map(function ($row) {
            // special handling of records with ID 0 (indicates a view of the front page when front page is not singular)
            if ($row->id == 0) {
                $row->post_permalink = home_url();
                $row->post_title     = get_bloginfo('name');
            } else {
                $post = get_post($row->id);
                if ($post) {
                    $row->post_title = isset($post->post_title) ? $post->post_title : $post->post_name;
                    $row->post_permalink = get_permalink($post);
                } else {
                    $row->post_title = '(deleted post)';
                    $row->post_permalink = '';
                }
            }

            $row->pageviews = (int) $row->pageviews;
            $row->visitors  = (int) $row->visitors;
            return $row;
        }, $results);
    }

    public function get_referrers(string $start_date, string $end_date, int $offset = 0, int $limit = 10): array
    {
        global $wpdb;
        $sql = $wpdb->prepare(
            "
                SELECT s.id, url, SUM(visitors) As visitors, SUM(pageviews) AS pageviews
                FROM {$wpdb->prefix}koko_analytics_referrer_stats s
                    JOIN {$wpdb->prefix}koko_analytics_referrer_urls r ON r.id = s.id
                WHERE s.date >= %s
                  AND s.date <= %s
                GROUP BY s.id
                ORDER BY pageviews DESC, r.id ASC
                LIMIT %d, %d",
            array( $start_date, $end_date, $offset, $limit )
        );
        return $wpdb->get_results($sql);
    }
}

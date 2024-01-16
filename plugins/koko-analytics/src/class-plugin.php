<?php

/**
 * @package koko-analytics
 * @license GPL-3.0+
 * @author Danny van Kooten
 */

namespace KokoAnalytics;

class Plugin
{
    /**
     * @var Aggregator
     */
    private $aggregator;

    /**
     * @param Aggregator $aggregator
     */
    public function __construct(Aggregator $aggregator)
    {
        $this->aggregator = $aggregator;
    }

    public function init(): void
    {
        register_activation_hook(KOKO_ANALYTICS_PLUGIN_FILE, array( $this, 'on_activation' ));
        add_filter('pre_update_option_active_plugins', array( $this, 'filter_active_plugins' ));
        add_action('init', array( $this, 'maybe_run_db_migrations' ));
    }

    // move koko analytics to top of active plugins
    // this improves performance of collecting data (if not using optimized endpoint)
    public function filter_active_plugins($plugins)
    {
        if (empty($plugins)) {
            return $plugins;
        }

        $pattern = '/' . preg_quote(plugin_basename(KOKO_ANALYTICS_PLUGIN_FILE), '/') . '$/';
        return array_merge(
            preg_grep($pattern, $plugins),
            preg_grep($pattern, $plugins, PREG_GREP_INVERT)
        );
    }

    public function on_activation(): void
    {
        // make sure koko analytics loads first to prevent unnecessary work on stat collection requests
        update_option('activate_plugins', get_option('active_plugins'));

        // add capabilities to administrator role (if it exists)
        $role = get_role('administrator');
        if ($role instanceof \WP_User) {
            $role->add_cap('view_koko_analytics');
            $role->add_cap('manage_koko_analytics');
        }

        // schedule action for aggregating stats
        $this->aggregator->setup_scheduled_event();

        // create optimized endpoint file
        $endpoint_installer = new Endpoint_Installer();
        $endpoint_installer->install();
    }

    public function maybe_run_db_migrations(): void
    {
        $from_version = get_option('koko_analytics_version', '0.0.0');
        $to_version   = KOKO_ANALYTICS_VERSION;
        if (\version_compare($from_version, $to_version, '>=')) {
            return;
        }

        // run upgrade migrations (if any)
        $migrations_dir = KOKO_ANALYTICS_PLUGIN_DIR . '/migrations/';
        $migrations = new Migrations($from_version, $to_version, $migrations_dir);
        $migrations->run();
        update_option('koko_analytics_version', $to_version, true);

        // make sure scheduled event is set up correctly
        $this->aggregator->setup_scheduled_event();
    }
}

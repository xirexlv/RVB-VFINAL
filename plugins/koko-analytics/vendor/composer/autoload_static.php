<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5608d862d297e8b27a53ff3412c837aa
{
    public static $files = array (
        'f51b3cc0d88203d7843e6784f629fa88' => __DIR__ . '/../..' . '/src/functions.php',
        'df059fcb781a431c7518892790b41fb1' => __DIR__ . '/../..' . '/src/global-functions.php',
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'KokoAnalytics\\Admin' => __DIR__ . '/../..' . '/src/class-admin.php',
        'KokoAnalytics\\Aggregator' => __DIR__ . '/../..' . '/src/class-aggregator.php',
        'KokoAnalytics\\Command' => __DIR__ . '/../..' . '/src/class-command.php',
        'KokoAnalytics\\Dashboard' => __DIR__ . '/../..' . '/src/class-dashboard.php',
        'KokoAnalytics\\Dashboard_Widget' => __DIR__ . '/../..' . '/src/class-dashboard-widget.php',
        'KokoAnalytics\\Dates' => __DIR__ . '/../..' . '/src/class-dates.php',
        'KokoAnalytics\\Endpoint_Installer' => __DIR__ . '/../..' . '/src/class-endpoint-installer.php',
        'KokoAnalytics\\Migrations' => __DIR__ . '/../..' . '/src/class-migrations.php',
        'KokoAnalytics\\Pageview_Aggregator' => __DIR__ . '/../..' . '/src/class-pageview-aggregator.php',
        'KokoAnalytics\\Plugin' => __DIR__ . '/../..' . '/src/class-plugin.php',
        'KokoAnalytics\\Pruner' => __DIR__ . '/../..' . '/src/class-pruner.php',
        'KokoAnalytics\\Rest' => __DIR__ . '/../..' . '/src/class-rest.php',
        'KokoAnalytics\\Script_Loader' => __DIR__ . '/../..' . '/src/class-script-loader.php',
        'KokoAnalytics\\Shortcode_Most_Viewed_Posts' => __DIR__ . '/../..' . '/src/class-shortcode-most-viewed-posts.php',
        'KokoAnalytics\\Stats' => __DIR__ . '/../..' . '/src/class-stats.php',
        'KokoAnalytics\\Widget_Most_Viewed_Posts' => __DIR__ . '/../..' . '/src/class-widget-most-viewed-posts.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit5608d862d297e8b27a53ff3412c837aa::$classMap;

        }, null, ClassLoader::class);
    }
}

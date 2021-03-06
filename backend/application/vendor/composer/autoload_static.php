<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd45f5582881d75242fe326ef50fb8acb
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd45f5582881d75242fe326ef50fb8acb::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd45f5582881d75242fe326ef50fb8acb::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}

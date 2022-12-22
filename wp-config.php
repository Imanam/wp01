<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp01db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'pG/CGI%DyxeY&zbTl{}(#gnE%`%zFXGnd6ffWrd>V5ki^)!oKom`<:<3ivQY{d$1' );
define( 'SECURE_AUTH_KEY',  'PG4%VH9I|@s@}*lX_Xt0/+#N^]_?e9Xdb4RrByqTKX2qfji-rc#hPgO3ZN-rmy<e' );
define( 'LOGGED_IN_KEY',    'RJ#_qRVHplw2ql.}b6A8N~TlR9T(@c}mrHyw5xmA[Ej]<EvjBZ@,L]A+p}vYd3Sq' );
define( 'NONCE_KEY',        '^-5Qn}iker<5RL|bc/MYvw/_SrBE#})}`Hb5]SNPU,5|E~/48N w^pVIYa|5QbdF' );
define( 'AUTH_SALT',        'zNh% ;8?7=KXno0+V%A.E 1cT,^z:={$~$-7e>Pe`3PjN&/?d3NOs_jUnVdZ`#j>' );
define( 'SECURE_AUTH_SALT', ' |MU2pj [4FswW`KP,tz<^bpDnaC$If*#hhZR[|LU=}@Z<V8l+G;c CIS:hf]DjO' );
define( 'LOGGED_IN_SALT',   ')EX+55j:We@K2MBa7.+KFdsx&1apsyw>:.}Rm^F2+*5H(Cp/p18Sv6et!1:b&7|;' );
define( 'NONCE_SALT',       '{EvvD19hX q)$,0[R!=ezyC%mp4f8b{1-6[>+5He{>#L.Yo#<s2$eD32qw! wN*(' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

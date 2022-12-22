<?php 
/**
 * functions.php
 *
 * Theme functions and definitions.
 *
 * @package WordPress
 * @subpackage WhiteShow
 * @since 1.0
 * @version 1.0
 */  


/*
 * Setup White Snow theme.
 */
function whitesnow_setup_theme() {
  // Wordpress will generate <title> tag automatically.
  add_theme_support( 'title-tag' );

  // Enable support for adding RSS feed links to head.
  add_theme_support( 'automatic-feed-links' ); 

  // Enable support for menus.
  register_nav_menu( 'header-navigation', 'Header navigation' );

  // Enable support for Post Thumbnails.
  add_theme_support( 'post-thumbnails' );
  set_post_thumbnail_size( 760, 300, true );
  add_image_size( 'whitesnow-single-image', 960, 540, true );
  
  // Set the max content width.
  $GLOBALS['content_width'] = 704;
}

add_action( 'after_setup_theme', 'whitesnow_setup_theme' );


/*
 * Enqueue styles and scripts.
 */
function whitesnow_enqueue_scripts() {
  // Load theme style.
  wp_enqueue_style( 
    'whitesnow-style', 
    get_stylesheet_uri() 
  );

  // Enqueue Roboto font from google.
  wp_enqueue_style( 
    'roboto',
    'https://fonts.googleapis.com/css?family=Roboto'
  );
}

add_action( 'wp_enqueue_scripts', 'whitesnow_enqueue_scripts' );


/*
 * Register sidebar
 */
function whitesnow_widgets_init() {
  // Register main sidebar
  register_sidebar( array(
    'name'          => 'Main Sidebar',
    'id'            => 'sidebar-main',
    'description'   => 'Add widgets you want to display in sidebar.',
    'before_widget' => '<section id="%1$s" class="widget %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h5 class="widget-title heading-small">',
    'after_title'   => '</h5>',
  ) );
}

add_action( 'widgets_init', 'whitesnow_widgets_init' );


/*
 * Remove #more-000 anchor from the read-more link.
 */
function whitesnow_remove_more_link_anchor( $link ) {
  $link = preg_replace( '/#more-[0-9]+/', '', $link );
  return $link;
}

/*
 * Add js file
 */
function my_scripts_method() {
  wp_enqueue_script(
              'custom_script',
              get_template_directory_uri() . '/js/main.js',
       );
  }
  add_action('wp_enqueue_scripts', 'my_scripts_method');

add_filter( 'the_content_more_link', 'whitesnow_remove_more_link_anchor' );
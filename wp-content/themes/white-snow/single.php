<?php
/**
 * single.php
 *
 * The template for all sinlge posts.
 *
 * @package WordPress
 * @subpackage WhiteShow
 * @since 1.0
 * @version 1.0
 */
?>

<?php get_header(); ?>

<div id="primary" class="l-main content-area">
  <main id="main" class="site-main" role="main">

    <?php while( have_posts() ) : the_post(); ?>    
      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="entry-header">
          <time class="size-tiny entry-date"><?php echo get_the_date(); ?></time>
          <?php the_title( '<h1 class="heading-big entry-title">', '</h1>' ); ?>     
        </header>

        <?php if( has_post_thumbnail() ) : ?>
          <div class="entry-thumbnail">
            <?php the_post_thumbnail( 'whitesnow-single-image' ); ?>
          </div>
        <?php endif; ?>

        <div class="entry-content">
          <?php the_content(); ?>
        </div>
      </article> 

      <?php 
        the_post_navigation( array(
          'prev_text'           => '<span class="size-small">前の記事</span>',
          'next_text'           => '<span class="size-small">次の記事</span>',
          'screen_reader_text'  => '前後の記事へのリンク',
        ) ); 
      ?>
    <?php endwhile; ?>

  </main>
</div>

<?php get_sidebar(); ?>

<?php get_footer(); ?>

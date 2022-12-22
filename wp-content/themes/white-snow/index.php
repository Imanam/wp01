<?php
/**
 * index.php
 *
 * The main template file for white theme.
 * This is always used when there is no specific template like archive.php, category.php.
 *
 * @package WordPress
 * @subpackage WhiteShow
 * @since 1.0
 * @version 1.0
 */
?>

<?php get_header(); ?>
<script type='text/javascript' src='<?php  echo get_template_directory_uri();?>/js/main.js'></script>

<div id="primary" class="l-main content-area">
  <main id="main" class="site-main" role="main">
    <div class="flex-box">
      <div>
        <a class="thumbnail" href=""><img onmouseover="changeFontColorLeftWhite()" onmouseout="changeFontColorLeftBlack()"  src="<?php echo get_template_directory_uri(); ?>/images/hair.jpg"></a>
        <div class="letters"> 
          <p id="fontLeft" class="bigLetters">訪問美容</p>
          <p>アゲイントウキョウ</p>
        </div> 
      </div>
      <div>
        <a class="thumbnail" href=""> <img onmouseover="changeFontColorRightWhite()" onmouseout="changeFontColorRightBlack()"  src="<?php echo get_template_directory_uri(); ?>/images/camera.jpg"></a>
        <div class="letters" > 
          <p id="fontRight" class="bigLetters">出張撮影</p>
          <p>ネバーエンディング</p>
        </div>
      </div>
    </div>

  </main>
</div>

<?php get_footer(); ?>

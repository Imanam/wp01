<?php
/**
 * sidebar.php
 *
 * Main sidebar for White Snow theme.
 * This template part displays widgets registered on the dashboard.
 *
 * @package WordPress
 * @subpackage WhiteShow 
 * @since 1.0
 * @version 1.0
 */
if ( ! is_active_sidebar( 'sidebar-main' ) ) {
  return;
}
?>

<aside id="secondary" class="l-side sidebar" role="complementary">
  <?php dynamic_sidebar( 'sidebar-main' ); ?>
</aside>
<?php
/*
Template Name: List of Posts with Google Ads

This is a simple WordPress page template for showing a list of post titles
in a specific category, with a Google ad after a certain number of posts.
Add your Google Adsense script in the div with class custom-adsense. Save this
file in the same folder in your WordPress theme directory where your page.php
file lives, and a new template called "List of Posts with Google Ads"
will be available when you create new pages in WordPress.
*/
get_header(); ?>

	<div id="primary">

		<div id="content">

			<?php query_posts('cat=132'); //category of posts to show
         $counter = 0; //set counter to zero to start
         ?>

         <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

            <?php if ($counter < 5) : ?> <!-- Page will show 5 post titles before showing an ad. You can change this integer. -->

               <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
               <hr>
               <?php $counter = $counter+1; ?> <!-- Counting posts... -->

            <?php else : ?>
               <div class="custom-adsense">
                  Your Google ad goes here.
                  <hr>
               </div>
               <?php $counter = 0; ?> <!-- Page will start counting posts from 0 again -->

            <?php endif; ?>

         <?php endwhile; endif; ?>
         <?php wp_reset_query(); ?>

		</div><!-- #content -->

	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
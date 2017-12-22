(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".hero-slider").owlCarousel({
            items:1,
            autoplay:true,
            loop:true,
            dots:false,
            nav:true,
            navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
        });


        $(".testimonial-slider").owlCarousel({
        	items:1,
        	autoplay:false,
        	loop:true,
            dots:true,
        	nav:false
        });

        $(".product-list").masonry();

    });


}(jQuery));	

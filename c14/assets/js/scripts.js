(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".staff-list").owlCarousel({
        	items:4,
        	autoplay:true,
        	margin:50,
        	loop:true,
        	nav:true,
        	navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
        });

        $(".product-list").masonry();

    });


}(jQuery));	

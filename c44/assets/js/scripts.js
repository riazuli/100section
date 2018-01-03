(function ($) {
	"use strict";

    jQuery(document).ready(function($){


    	$(".hero-slider").owlCarousel({
            items:1,
            loop:true,
            nav:true,
            dots:true,
            animateOut: 'fadeOut',
            navText: ["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"],
            autoplay:true,
        });
    	
    	
    });


}(jQuery));	

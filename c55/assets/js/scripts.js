(function ($) {
	"use strict";

    jQuery(document).ready(function($){


    	$(".slide-list").owlCarousel({
            items:3,
            margin:30,
            loop:true,
            nav:false,
            dots:true,
            autoplay:false,
        });

         $(".video-play-btn").magnificPopup({
            type: 'video',
        });
    	
    	
    });


}(jQuery));	

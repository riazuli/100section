(function ($) {
	"use strict";

    jQuery(document).ready(function($){
    	
    	$(".owl-project").owlCarousel({
    		items:1,
    		nav:false,
    		loop:true,
    		dots:true,
    		autplay:false,
    		animateOut: 'fadeOut'
    	});

    });

    $(window).scroll(function() {    
	   
	});


}(jQuery));	

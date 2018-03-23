(function ($) {
	"use strict";

    jQuery(document).ready(function($){
    	
         $('#webdesign-progressbar').circleProgress({
         value: 0.6,
    fill: {color: '#333'}
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.pacentage').html(Math.round(63 * progress) + '<i>%</i>');
      });
         $('#uxdesign-progressbar').circleProgress({
         value: 0.6,
    fill: {color: '#333'}
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.pacentage').html(Math.round(90 * progress) + '<i>%</i>');
      });

    	 $('#webdev-progressbar').circleProgress({
         value: 0.6,
    fill: {color: '#333'}
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.pacentage').html(Math.round(56 * progress) + '<i>%</i>');
      });

    });

    $(window).scroll(function() {    
	   
	});


}(jQuery));	

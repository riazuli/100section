(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	$('.countdown').countdown('2020/10/10', function(event) {
		  $(this).html(event.strftime('<span class="contdown-wrapp"><span class="single-contdown-item">%w<span>Weeks</span></span><span class="single-contdown-item">%D<span>Days</span></span><span class="single-contdown-item">%H<span>Hours</span></span><span class="single-contdown-item">%M<span>Minutes</span></span><span class="single-contdown-item">%S<span>Seconds</span></span></span>'));
		});

    });

    $(window).scroll(function() {    
	   
	});


}(jQuery));	

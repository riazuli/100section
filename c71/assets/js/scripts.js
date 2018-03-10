(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	$('[data-toggle="tooltip"]').tooltip();
    	$('[data-toggle="popover"]').popover();

    	var footerHeight = $(".footer").outerHeight();
    	$(".site-wrapp").css('margin-bottom', footerHeight + 'px');

    });

    $(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	     //>=, not <=
	    if (scroll >= 100) {
	        //clearHeader, not clearheader - caps H
	        $(".main-menu").addClass("sticky");
	    }else{

	        $(".main-menu").removeClass("sticky");
	    }
	});


}(jQuery));	

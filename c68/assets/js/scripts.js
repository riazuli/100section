(function ($) {
	"use strict";

    jQuery(document).ready(function($){

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

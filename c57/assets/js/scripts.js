(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $('.theme-2').on('click',function () {
            $('body').addClass('theme-2');
            return false;
        });

        $('.theme-1').on('click',function () {
            $('body').removeClass('theme-2');
            return false;
        });

        var ps = new PerfectScrollbar('.author-list');
    	
    	
    });


}(jQuery));	

(function ($) {
	"use strict";

    jQuery(document).ready(function($){


    	$(".project-sorting li").on("click",function() {

    		$(".project-sorting li").removeClass("active");
    		$(this).addClass("active");

    		var filterValue= $(this).attr("data-filter");
    		$(".project-list").isotope({
    			filter: filterValue,
    		});
    	});

    	$(".project-list").isotope();
    });


}(jQuery));	

(function ($) {
	"use strict";

    jQuery(document).ready(function($){

      $(".portfolio-list").isotope();

        $(".portfolio-sorting li").on("click",function() {

            $(".portfolio-sorting li").removeClass("active");
            $(this).addClass("active");

            var filterValue= $(this).attr("data-filter");
            $(".portfolio-list").isotope({
                filter: filterValue,
            });
        });


    });



}(jQuery));	

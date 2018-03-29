(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        $(".hero-slider").owlCarousel({
            items:1,
            loop:true,
            dots:true,
            nav:true,
            navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            autoPlay:false,
            dotsData: true
        });

    });

    $(window).scroll(function() {

    });


}(jQuery));
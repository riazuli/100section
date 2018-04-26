(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        $(".hero-area").owlCarousel({
            items:1,
            loop:true,
            dots:true,
            nav:false,
            autoPlay:false
        });

        $(".logo-carousel").owlCarousel({
            items:5,
            loop:true,
            dots:false,
            margin:30,
            nav:false,
            autoPlay:false
        });

    });

    $(window).scroll(function() {

    });


}(jQuery));
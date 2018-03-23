(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        $('.hover').hover(function() {
            $(this).addClass('flip');
        }, function() {
            $(this).removeClass('flip');
        });

    });

    $(window).scroll(function() {

    });


}(jQuery));
/**
 * Created by varon on 22/10/2018.
 */

(function() {
    'use strict';

    var $ = jQuery;
    $( document ).ready(function() {
        var $allJokes = $('.portfolio-item');

        $allJokes
            .slick({
                slidesToShow: 2,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: false,
                            slidesToShow: 3,
                            slidesToScroll: 2,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
    });
})();

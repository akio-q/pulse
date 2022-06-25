'use strict';

$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 800,
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/arrow-right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
            },
        ]
      });
});


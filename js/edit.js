$(window).on('load', function () {
    $('.loader').fadeOut(3000, function () {
        $(this).parent().fadeOut(250, function () {
            $(this).remove();
        });
    });
});

/*global $ */
$(document).ready(function ($) {
    'use strict';
 
    // WOW 
    new WOW().init();

    // SELECT 
    $('select').niceSelect();

    // NICE SCROLL
    $("body").niceScroll({
        cursorcolor: "rgb(250, 220, 12)",
        cursorwidth: "5",
        cursorminheight: 40,
        background: "transparent",
        cursorborder: "1px solid rgb(250, 220, 12)",
        cursorborderradius: 5
    });

    // Open navbarSide when button is clicked
    $('.header-nav .btn').on('click', function () {
        $('.header-nav ul').addClass('show-sidenav');
        $('.header-nav  .over-lay').show();
    });

    // Close navbarSide when the outside of menu is clicked
    $('.header-nav  .over-lay').on('click', function () {
        $('.header-nav ul').removeClass('show-sidenav');
        $('.header-nav  .over-lay').hide();
    });

    // STICKY NAV  FIXED
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.header-nav').addClass("navbar-fixed-top");
        }
        else {
            $('.header-nav').removeClass("navbar-fixed-top");
        }
    });

    // SCROLL TO TOP
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {    // If page is scrolled more than 50px
            $('.scrol-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('.scrol-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('.scrol-top').click(function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 1000);
    });

    // DATE TIME PICKER 
    $('#datetimepicker1').datetimepicker({
        format: "DD/MM/YYYY"
    });
    
    // LIST BUTTON TO SHOW LIST 
    $('.list-btn').click(function () {      // When arrow is clicked
        $(this).addClass('active');
        $('.box-btn').removeClass('active');
        $('.content-show .col-12').removeClass( 'col-lg-3 col-md-6 col-sm-6');
        $('.content-show .col-12').addClass('product-list');
    });

    // BOX BUTTON TO SHOW GRID 
    $('.box-btn').click(function () {      // When arrow is clicked
        $(this).addClass('active');
        $('.list-btn').removeClass('active');
        $('.content-show .col-12').addClass('col-lg-3 col-md-6 col-sm-6');
        $('.content-show .col-12').removeClass('product-list');
    });

});



$(document).ready(function ($) {
    'use strict';

    // HOME SLIDER 
    $('.home-slider').owlCarousel({
        rtl: true,
        margin: 0,
        animateOut: 'slideOutDown',
        animateIn: 'zoomIn',
        autoplay: true,
        loop: true,
        nav: true,
        dots:true,
        navText: ["<i class='icofont icofont-simple-right'></i>", "<i class='icofont icofont-simple-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // CATEGOREY SLIDER 
    $('.cat-carousel').owlCarousel({
        rtl: true,
        autoplay: true,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        navText: ["<i class='icofont icofont-simple-right'></i>", "<i class='icofont icofont-simple-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 4
            }
        }
    });

});

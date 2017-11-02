/**
 * Created by Donghui Huo on 2016/3/15.
 */
var $ = jQuery = require('jquery');
require("flexslider");
require("bootstrap");
var utilFun = require("utilFun");
$(document).ready(function () {
    //onclick give active
    $(".navbar-nav li.active").removeClass("active");
    $(".navbar-nav li." + $("body").attr("id") + "-li").addClass("active");
    $(".navbar-nav li." + $("body").attr("id") + "-li-parent").addClass("active");
    $(".left-menu li." + $("body").attr("id")).addClass("active");

    $(".top-logo .top-logo-img").click(function () {
        if ($(window).width() <= 768) {
            if ($(".navbar.navbar-default").is(":hidden")) {
                $(".navbar.navbar-default").slideDown()
            } else {
                $(".navbar.navbar-default").slideUp()
            }
        }
    })
    if ($("body").attr("id") === 'index') {
        $('.first-container .flexslider').flexslider({
            fadeFirstSlide: false,
            controlNav: false,
            directionNav: true,
            animationSpeed: 1000,
            slideshowSpeed: 4000,
            slideshow: true,
            animation: "slide",
            prevText: "",
            nextText: "",
        });
    }
});


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

    // $(".top-logo .top-logo-img").click(function () {
    //     if ($(window).width() <= 768) {
    //         if ($(".navbar.navbar-default").is(":hidden")) {
    //             $(".navbar.navbar-default").slideDown()
    //         } else {
    //             $(".navbar.navbar-default").slideUp()
    //         }
    //     }
    // })
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

        // 此处需要一个 captchaKey 和captchaValue
        // 参照此处 http://share-suite.com/sharesuite/kontakt
        $('#form-newsletter .newsletter-submit').click(function (e) {
            if (!$('#form-newsletter input[name="email"]').val() || !$('#form-newsletter textarea[name="comment"]').val()) {
                alert('Fields marked with an asterisk are required');
            } else {
                // $.ajax({
                //     method: 'GET',
                //     url: "http://83.246.40.177/cmsbackend/form/sendMail",
                //     dataType: "jsonp",
                //     data: {
                //         subject: $('#form-newsletter input[name="subject"]').val(),
                //         content: ('<ul>'+$('#form-newsletter input[name="firstName"]').val() ? '<li>First Name: ' + $('#form-newsletter input[name="firstName"]').val() + '</li>' : '') +
                //         ($('#form-newsletter input[name="lastName"]').val() ? '<li>Last Name: ' + $('#form-newsletter input[name="lastName"]').val() + '</li>' : '') +
                //         ($('#form-newsletter input[name="phone"]').val() ? '<li>Phone: ' + $('#form-newsletter input[name="phone"]').val() + '</li>' : '') +
                //         '<li>Email: ' + $('#form-newsletter input[name="email"]').val() + '</li>' +
                //         '<li>Message: ' + $('#form-newsletter textarea[name="comment"]').val() + '</li></ul>'
                //     },
                //     jsonp: 'callback',
                //     jsonpCallback: 'newsletter_callback',
                //     success: function (data) {
                //         if (data.success) {
                //             alert('thank you, we will response to you as soon as possible')
                //             $('#form-newsletter')[0].reset();
                //         }
                //     }
                // });
                alert('thank you, we will response to you as soon as possible')
            }
            e.preventDefault()
        })

    }

    if ((window.innerHeight + 100) < $(document).height()) {
        $('#top-link-block').removeClass('hidden').affix({
            // how far to scroll down before link "slides" into view
            offset: {top: 100}
        });
    }

    $("#top-link-block a").click(function () {
        $('html,body').animate({scrollTop: 0}, 'slow');
        return false;
    })
});


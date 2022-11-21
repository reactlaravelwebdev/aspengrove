(function($) {
    $(document).ready(function() {
        /* add box shadow on header on scroll */
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll) {
                $(".header-wrapper").css('background-color', 'rgba(255,255,255,.95)');
            } else {
                $(".header-wrapper").css('background-color', '');
            }
        });

        /* improve culture slider */
        $('.culture-slider').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            prevArrow: '<span class="slick-prev">Prev</span>',
            nextArrow: '<span class="slick-next">Next</span>',
            customPaging: function(slick, index) {
                var tabTitle = slick.$slides.eq(index).find('.tabtitle').html();
                return '<span class="font-bold">' + tabTitle + ' </span>';
            }
        });

        /* change position of slick dots */
        $($(".culture-slider .slick-dots").detach()).appendTo(".culture-slider-tab");


        /* cs slide */
        $('.cs-slider').slick({
            infinite: false,
            arrows: false,
            dots: true,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '0'
        });

        var slideritems = $('.cs-slider .slick-dots li').length;
        var count = 100 / slideritems;
        $('.cs-slider .slick-dots li').css('width', count + '%');


        /* responsive menu */
        if (window.screen.width <= 992) {

            var openMenu = $('.contact-popup-trigger .menu');
            var closeMenu = $('.contact-popup-trigger .close');
            var sidebarMenu = $('.header-wrapper .sidebar-menu');

            openMenu.text('MENU')

            openMenu.click(function() {
                $(this).css('display', 'none');
                closeMenu.css('display', 'block');
                sidebarMenu.css('display', 'flex');
            })

            closeMenu.click(function() {
                $(this).css('display', 'none');
                openMenu.css('display', 'flex');
                sidebarMenu.css('display', 'none');
            })
        }

        /* child-links */
        $('.nav-link').click(function() {
            $('.child-links').css("display", "none");
            $(this).siblings().css('display', 'flex');
        })
    })
})(jQuery);
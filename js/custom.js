
$(function(){


    $(".lg_nav_btn").click(function(){
        $(".navbar-collapse").toggleClass("lg_nav_toggler");

        $(".lg_nav_btn").toggleClass("lg_toggler_btn");
      });


      // banner slider
      $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        autoplaySpeed: 4000,
      });
      $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.banner_slider',
        fade: true,
        arrows: false,
      });

});
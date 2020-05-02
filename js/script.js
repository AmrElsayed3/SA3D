$(document).ready(function () {
  'use strict';
  $('.header .list ul li a').click(function (e){
    $(this).addClass('s-active').parents('li').siblings().find('a').removeClass('s-active');
  });

  $('.tiger-collapse ul li a').click(function (e){
    $(this).addClass('s-active').parents('li').siblings().find('a').removeClass('s-active');
  });

  $('.help-types a').click(function (e){
    e.preventDefault();
    $(this).addClass('help-active').siblings('a').removeClass('help-active');
  });

  $(".header .list ul li .self ,.tiger-collapse ul li .self").click(function (e) {

    e.preventDefault();
    $('html,body').animate({

      scrollTop: $('#' + $(this).data('active')).offset().top - 100
    }, 700);

  });
  $(".sign-up-page .button a").click(function (e) {

    e.preventDefault();
    $(this).addClass('sign-active').siblings('a').removeClass('sign-active')

    // console.log();
    $('#' + $(this).data('sign')).removeClass('hide').siblings('.helps-details').addClass('hide');

  });
  $('.personal .img').click(function (e) {
    e.preventDefault();
    if($('.personal .s-drop-down').hasClass('visible')){
      $('.personal .s-drop-down').addClass('s-a').removeClass('visible')
    }else(
      $('.personal .s-drop-down').removeClass('s-a').addClass('visible')
    )
  })



  $(window).load(function (){
    if( $(window).scrollTop () > 300 ){

      $('.home-page .header').addClass('logo-scroll');
      $('.home-page .logo-white').addClass('logo-hidden');
      $('.home-page .logo-black').removeClass('logo-hidden');

    }else {

        $('.home-page .header').removeClass('logo-scroll');
        $('.home-page .logo-black').addClass('logo-hidden');
        $('.home-page .logo-white').removeClass('logo-hidden');
    }

  });
  $(window).scroll(function (){
    if( $(window).scrollTop () > 300 ){

      $('.home-page .header').addClass('logo-scroll');
      $('.home-page .logo-white').addClass('logo-hidden');
      $('.home-page .logo-black').removeClass('logo-hidden');

    }else {

      $('.home-page .header').removeClass('logo-scroll');
      $('.home-page .logo-black').addClass('logo-hidden');
      $('.home-page .logo-white').removeClass('logo-hidden');
    }

  });
  $('.toggle').click(function(){

      $('.tiger-collapse').toggleClass("visible");

      if ( $('.tiger-collapse').hasClass("visible") && $(window).scrollTop () > 300 ){

          $('.tiger-collapse').animate({

              top:"103px"

          },500);


      }else if ($('.tiger-collapse').hasClass("visible") && $(window).scrollTop () < 300) {
        $('.tiger-collapse').animate({

            top:"130px"

        },500);


      }else{

          $('.tiger-collapse').animate({
              top:"-380px"
          },500);
      }
  });

});

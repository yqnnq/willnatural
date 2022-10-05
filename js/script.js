
// ハンバーガーメニュー
$(function () {
    $('.hamburger').on('click',function(){
      $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
          $('.hamburger-nav').addClass('active');
          $('.mask').addClass('active');
          $('body').addClass('fixed');
        } else {
          $('.hamburger-nav').removeClass('active');
          $('.mask').removeClass('active');
          $('body').removeClass('fixed');
        }

    });
});
//メニュー内を閉じておく
// $(function() {
//     $('.hamburger-nav a[href]').click(function() {
//         $('.hamburger-nav').removeClass('active');
//       $('.hamburger').removeClass('active');
//       $('.mask').removeClass('active');

//     });
// });


// アコーディオンメニュー
$(function () {
  $('.ac-menu a').on('click',function(){
    $(this).toggleClass('active');
    $(this).next('.ac-menu-list').slideToggle();
  });
});


// ページトップボタン
$(window).on('scroll',function(){
  if ($(this).scrollTop() > 200) {
    $('.page-top').addClass('UpMove');
  } else {
    if ($('.page-top').hasClass('UpMove')) {
      $('.page-top').removeClass('UpMove');
    }
  }
});

// ページトップへ戻る
$(function() {
  $('.page-top a').on('click',function(){
    $('body,html').animate({
      scrollTop: 0
    }, 500);//数字が大きいほど遅くなる
    return false;
  });
});

// 画像のアニメーション
$(window).on('scroll',function(){
  $(".item-box").each(function(){
    let position = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > position - windowHeight + 25){
      $(this).addClass('fadeIn');
    } else {
    $(this).removeClass('fadeIn');
    }
  });
});


// checkeditem
$(function () {
  $('.item-about').on('click', function () {
    $('#checkeditem').addClass('open');
    return false;
  });
});

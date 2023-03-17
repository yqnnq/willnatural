$(function () {
  // ハンバーガーメニュー
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

  // アコーディオンメニュー
  $('.ac-menu a').on('click', function () {
    $(this).toggleClass('active');
    $(this).next('.ac-menu-list').slideToggle();
  });

  // ページトップへ戻る
  $('.page-top a').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);//数字が大きいほど遅くなる
    return false;
  });

  $(".topics-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: "10%",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // checkeditem
  // $('.item-about').on('click', function () {
  //   $('#checkeditem').addClass('open');
  //   return false;
  // });
});

// ページトップボタン
function pageTop() {
  if ($(window).scrollTop() > 200) {
    $('.page-top').addClass('UpMove');
  } else {
    if ($('.page-top').hasClass('UpMove')) {
      $('.page-top').removeClass('UpMove');
    }
  }
}

// 画像のアニメーション
function animation() {
  $(".item-box").each(function () {
    let position = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > position - windowHeight + 25) {
      $(this).addClass('fadeIn');
    } else {
      $(this).removeClass('fadeIn');
    }
  });
}


$(window).on('scroll',function(){
  pageTop();// ページトップボタン
  animation();// 画像のアニメーション
});

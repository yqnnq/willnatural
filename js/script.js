// アンカーリンク
function linkClick() {
  $('a[href^="#"]').click(function () {
    const header = $(".header").height() + 20;
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top - header;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
}

// ハンバーガーメニュー
function hamburger() {
  $('.hamburger').on('click', function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.hamburger-nav').addClass('active');
      $('body').addClass('fixed');
    } else {
      $('.hamburger-nav').removeClass('active');
      $('body').removeClass('fixed');
    }
  });
}

// アコーディオンメニュー
function accordion() {
  $('.ac-menu>a').on('click', function () {
    $(this).toggleClass('active');
    $(this).next('.ac-menu-list').slideToggle();
    return false;
  });
}

// 検索ボタン
function search() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    $('.search-btn, .search-box-close').on('click', function () {
      $('.search-box').toggleClass('active');
      return false;
    });
  }
}

// ページトップへ戻る
function pageTop() {
  $('.page-top a').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);//数字が大きいほど遅くなる
    return false;
  });
}

function tabChange() {
  const $tab = $('.topics-cat-tab');
  const $box = $('.topics-item-box');
  $tab.on('click', function () {
    const $tabWrap = $(this).parents('#topics');
    const $tabBtn = $tabWrap.find($tab);
    const $tabContents = $tabWrap.find($box);
    const $index = $tabBtn.index(this);
    $tabBtn.removeClass('active');
    $(this).addClass('active');
    $tabContents.removeClass('active');
    $tabContents.eq($index).addClass('active');
  });
}

// ヘッダーからアンカーリンク時
function tabChange2() {
  $('.link-topics a').on('click', function () {
    $(".topics-cat-tab").removeClass('active');
    $(".topics-item-box").removeClass('active');
    $(".topics").addClass('active');
    $('.topics-slider').slick('setPosition');
  });

  $('.link-news a').on('click', function () {
    $(".topics-cat-tab").removeClass('active');
    $(".topics-item-box").removeClass('active');
    $(".news").addClass('active');
    $('.topics-slider').slick('setPosition');
  });
}

// スライダー
function slider() {
  $(".mv-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          swipeToSlide: true,
        },
      },
    ],
  });

  $(".topics-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
        },
      },
    ],
  });
  $('.topics-cat-tab').click(function () {
    $('.topics-slider').slick('setPosition');
  });
}

// ページトップボタン
function pageTopBtn() {
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
    if (scroll > position - windowHeight + 100) {
      $(this).addClass('fadeIn');
    } else {
      $(this).removeClass('fadeIn');
    }
  });
}

$(function () {
  linkClick()
  hamburger();
  accordion();
  search();
  pageTop();
  tabChange();
  tabChange2();
  slider();
});

$(window).on('scroll',function(){
  pageTopBtn();
  animation();
});

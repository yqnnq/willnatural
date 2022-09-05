

$(function () {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.hamburger-nav').addClass('active');
        } else {
            $('.hamburger-nav').removeClass('active');
        }

    });
});
//メニュー内を閉じておく
$(function() {
    $('.hamburger-nav a[href]').click(function() {
        $('.hamburger-nav').removeClass('active');
        $('.hamburger').removeClass('active');

    });
});

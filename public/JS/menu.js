window.onscroll = menu_scroll;

function menu_scroll() {
    if ($('html').width() > 1025) {
        if (document.body.scrollTop > 54)
            $('.menu').fadeIn("slow", function () {
                $('.menu').css('position', 'fixed');
                $('.menu').css('top', -10);
            });
        if (document.body.scrollTop < 54) {
            $('.menu').css('position', 'relative');
            $('.menu').css('top', 0);
        }
    }
};
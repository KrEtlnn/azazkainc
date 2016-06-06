//Подключение меню
var link = document.querySelector('link[rel=import]');
var content = link.import.querySelector('.menu');
document.body.insertBefore(content, document.getElementsByClassName('menu-end')[0]);
//Фиксированое меню при прокрутке
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

function open_menu() {
    $('.menu').css('height', 174);
};
function close_menu() {
    $('.menu').css('height', 18);
};
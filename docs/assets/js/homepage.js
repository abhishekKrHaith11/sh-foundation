/**
 * Homepage
 *
 * @requires JQuery
 */

$(function () {
    $('#navbar ul li a').click(function (e) {
        const href = e.target.href;
        const fragmentPos = href.indexOf('#');

        if (fragmentPos === -1) {
            return;
        }

        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(href.substring(fragmentPos)).offset().top,
        }, 400);
    });
});
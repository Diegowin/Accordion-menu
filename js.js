$(function () {
    $('.level2').not('.active').hide(); // hide all but the active
    $('.level').click(function() {
        $('.level2').not($(this).next('.level2')).removeClass('active').slideUp(500); // close level2
        $(this).next('.level2').addClass('active').slideDown(500); // open level2
    });
});
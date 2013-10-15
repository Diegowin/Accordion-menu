$(document).ready(function(){
    $('.level2')
        .click(function(event){
            event.stopPropagation();
        })
        .filter(':not(:first)')
        .hide();

    $('.level').click(function(){
        var selfClick = $(this).find('.level2:first').is(':visible');
        if(!selfClick) {
            $(this)
                .parent()
                .find('> .level2:visible')
                .slideToggle();
        }

        $(this)
            .find('ul:first')
            .stop(true, true)
            .slideToggle();
    });
});


$(document).ready(function(){
    $('#celebs ul > li ul')
        .click(function(event){
            event.stopPropagation();
        })
        .filter(':not(:first)')
        .hide();

    $('#celebs ul > li').click(function(){
        var selfClick = $(this).find('ul:first').is(':visible');
        if(!selfClick) {
            $(this)
                .parent()
                .find('> li ul:visible')
                .slideToggle();
        }

        $(this)
            .find('ul:first')
            .stop(true, true)
            .slideToggle();
    });
});

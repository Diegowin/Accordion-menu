$('#celebs ul > li ul')
    .click(function(event){
        event.stopPropagation();
    })
    .filter(':not(:first)')
    .hide();
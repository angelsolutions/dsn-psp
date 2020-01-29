$( ".js-selectable-pill" ).click(function() {
    $(this).toggleClass('is-selected');
     var snum = $(this).attr('data-index');
     var slinkedTo = $('#team-selected'+snum);
     slinkedTo.toggleClass('visuallyhidden');
     $('.no-plans').addClass('visuallyhidden');
});

$( ".js-remove" ).click(function() {
    $(this).toggleClass('visuallyhidden');
    var num = $(this).attr('data-index');
    var linkedTo = $('#team'+num);
    linkedTo.toggleClass('is-selected');

    //Is list empty
    var emptyList = $('.js-selected-plan-list li:not(.visuallyhidden)').length;
    console.log(emptyList);

    if(!emptyList){
        $('.no-plans').removeClass('visuallyhidden');
        $('.js-team-toggle span[class^="is-"]' ).addClass('visuallyhidden');
        $('.js-team-toggle .is-empty' ).removeClass('visuallyhidden');
    }

});

$( ".js-team-toggle" ).click(function() {

    $(this).toggleClass('is-open');
    $(this).find( 'span[class^="is-"]' ).addClass('visuallyhidden');


    if($(this).hasClass('is-open')){
        $(this).find( '.is-open' ).removeClass('visuallyhidden');
    }
    else{
        $(this).find( '.is-default' ).removeClass('visuallyhidden');
    }
    $('.full-team-list, .js-selected-plan-list').toggleClass('visuallyhidden');

    
});
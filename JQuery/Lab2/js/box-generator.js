$(function(){


    $(".red").on({
        mouseenter: function() {
            $(this).addClass('blue');
        },
        mouseleave: function() {
            $(this).removeClass('blue');
        },
        click: function() {
            $("body").append($(".red").clone(true));
        }
    });


})// End of load event
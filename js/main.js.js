$(document).ready(function(){

});

$(window).on("scroll" , function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
        $('a').addClass('black');
        $('navbar-brand').addClass('black');
        $('.navbar-light .navbar-toggler').addClass('black');
    }

    else {
        $('nav').removeClass('black');
        $('a').removeClass('black');
        $('navbar-brand').removeClass('black');
        $('.navbar-light .navbar-toggler').removeClass('black');
    }
})
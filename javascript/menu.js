
// Primeira função para fazer o menu responsivo;

$(document).ready(function(){
    $('.menu').click(function(){
        $('ul').toggleClass('active');
        $('header').toggleClass('active2');
    })
})

// Como o menu é grande, existe essa função para diminuir em uma certa altura do scroll;

$(function() {
    $(window).on("scroll", function() {

        if($(window).scrollTop() > 200) {

            $(".header").addClass("active-menu");
            $(".menu-logo").addClass("active-logo");
            $(".teste2").addClass("active-teste");
            $(".teste3").removeClass("active2");

        } else {
            
           $(".header").removeClass("active-menu");
           $(".menu-logo").removeClass("active-logo");
           $(".teste2").removeClass("active-teste");
           $(".teste3").addClass("active2");

        }

        if($(window).scrollTop() > 10) {

            $(".teste3").removeClass("active2");

        } else {

           $(".teste3").addClass("active2");

        }

    });

});
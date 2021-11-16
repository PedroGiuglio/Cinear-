$(function () {


    $(".btn-success").click(function () {
        console.log("¡La compra se ha realizado con exito!")
    })


    // CARTELERA 1 - INFO //

    $(".imgPelicula").mouseover(function(){
        $("#modal").fadeIn();
    })

    $("#prueba").click(function(){
        $("#modal").fadeOut();
    })

    // CARTELERA 2 - INFO //

    $(".imgPelicula2").mouseover(function(){
        $("#modal2").fadeIn();
    })

    $("#prueba2").click(function(){
        $("#modal2").fadeOut();
    })

    // CARTELERA 1 - TRAILER //

    $(".BTN-1").click(function () {
        let url = $(this).attr("ref")
        $("#trailerVideo").attr("src",url)
        $("#popUp").fadeIn();
    })


    $("#popUp").click(function(){
        $("#popUp").fadeOut();
        $(".imgPelicula").fadeIn();
    })

    $(".btn-close").click(function(){
        $("#popUp").fadeOut();
        $(".imgPelicula").fadeIn();
    })

      // CARTELERA 2 - TRAILER //

    $(".BTN-2").click(function () {
        let url = $(this).attr("ref")
        $("#trailerVideo2").attr("src",url)
        $("#popUp2").fadeIn();
    })


    $("#popUp2").click(function(){
        $("#popUp2").fadeOut();
        $(".imgPelicula2").fadeIn();
    })

    $(".btn-close").click(function(){
        $("#popUp2").fadeOut();
        $(".imgPelicula2").fadeIn();
    })


    // SCROLL - EMAIL //

    $("#pedritoo").click(function() {
        $('html, body').animate({
        scrollTop: $("#scroll").offset().top
        }, 1000);
    });

    $(".carousel-inner2").click(function() {
        $('html, body').animate({
        scrollTop: $("#forms").offset().top
        }, 1000);
    });

})


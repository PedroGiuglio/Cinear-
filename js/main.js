$(function () {


    $(".btn-success").click(function () {
        console.log("¡La compra se ha realizado con exito!")
    })

    $(".btn-info").click(function () {
        $(".imgPelicula").fadeOut();
        let url = $(this).attr("ref")
        $("#trailerVideo").attr("src",url)
        $("#popUp").fadeIn();
    })

    $(".btn-close").click(function(){
        $("#popUp").fadeOut();
        $(".imgPelicula").fadeIn();

    })

    // $(".tituloPeli").mouseleave(function () {
    //     $(".imgPelicula").fadeIn();
    // })
    
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

    // $('.imgPelicula').click(function(){         
    //     $('#popup').fadeOut('slow');
    // });  
})


const trailers = [{ }]


$(document).ready(function () {

    $(".carrito-container").hide(); 

    $("#mostrarCarrito").click(function () { 
    
        $(".carrito-container").show();
        
    });

    $("#salirCompra").click(function (e) { 
        e.preventDefault();
        $('#cuerpoTabla').detach();
        $(".carrito-container").hide();
        
        
    });
});

/* animacion carrito modal*/


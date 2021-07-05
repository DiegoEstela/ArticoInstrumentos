

$(document).ready(function () {

    $(".carrito-container").hide(); 

    $("#mostrarCarrito").click(function () { 
    
        $(".carrito-container").show();
        
    });

    $("#salirCompra").click(function () { 
        
        $('#cuerpoTabla').detach();
        $(".carrito-container").hide();
        
        
    });
});

/* animacion carrito modal*/



$(document).ready(function () {

    $(".carrito-container").hide(); 

    $("#mostrarCarrito").click(function () { 
    
        $(".carrito-container").show();
        
    });

    $("#salirCarrito").click(function (e) { 
        e.preventDefault();
        $(".carrito-container").hide();
        
    });
});

/* animacion carrito modal*/


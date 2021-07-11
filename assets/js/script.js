

const listaProductos = document.getElementById('productos');
let carrito = [];
let carritoLLeno = [];
let numeroCompras = [];
let precioFinal = [];
localStorage.clear("carrito")

function agregarItem(objeto){

    carrito.push(objeto);
    console.log(carrito);

}

/* Lista de Productos*/

productos.forEach(prod => {
    let card = document.createElement('div')
    card.classList.add('col-lg-4')
    card.classList.add('col-md-6')
    card.classList.add('portfolio-item')
    card.classList.add(prod.filtro)
    card.innerHTML = `
        
            <div class="portfolio-wrap">
                <img src= ${prod.imagen} class="img-fluid" alt="">
                <div class="portfolio-links">
                <a href=${prod.imagen} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a id="prod-${prod.id}"  data-bs-toggle="modal" data-bs-target="#carritoModal"class="comprar" title="Detalles"><i class="bi bi-cart-plus-fill"></i></i></a>
                </div>
            </div>
        
    `
    listaProductos.appendChild(card)

    /* Boton agragar producto*/


    let botonAgregar = document.getElementById('prod-' + prod.id)
        botonAgregar.addEventListener("click", () =>{ 
            numeroCompras.push(+1)
            $("#bntCarrito").append(`<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> ${numeroCompras.length} </span>`)
           
            let idEncontrado = false;
        for (item of carrito){
            if (item.id == prod.id){
                console.log("existe id igual");
                item.cantidad = item.cantidad + 1;
                console.log(carrito);
                idEncontrado = true;

            }
        }
        if(idEncontrado == false){
            objetoAAgregar = productos [prod.id - 1];
            agregarItem(objetoAAgregar);

        }
        localStorage.setItem('carrito',JSON.stringify(carrito));  
    })


})

     /* Boton Mostrar Carrito*/

$("#bntCarrito").click(function () { 
     
    
    carrito.forEach(produ => {
    

        $("#cuerpoTabla").append(`
        
        <tr id="itemTabla-${produ.id}">
        <td id="cantidad-${produ.id}"><span id="spanCantidad-${produ.id}">${produ.cantidad}</span></td>
        <td>${produ.marca}</td>
        <td>${produ.modelo}</td>
        <td id="precio-${produ.id}"><span id="spanPrecio-${produ.id}">${produ.precio}</span></td>
        <td><button id="sumar-${produ.id}" type="button" class="btnCarritoFin btn btn-success"><i class="btnCarritoCuenta bi bi-bag-plus"></i></button></td>
        <td><button id="restar-${produ.id}" class="btnCarritoFin btn btn-danger"><i class="btnCarritoCuenta bi bi-bag-dash"></button></td>
        </tr>
        `
        )

        
        $("#sumar-"+ produ.id).click(function () { 
            
            produ.cantidad = produ.cantidad + 1;
            produPrecioFinal = produ.cantidad * produ.precio
            $("#spanCantidad-"+ produ.id).remove();
            $("#spanPrecio-"+ produ.id).remove();

            $("#cantidad-"+ produ.id).append(`<span id="spanCantidad-${produ.id}">${produ.cantidad}</span></td>`)
            $("#precio-"+ produ.id).append(`<span id="spanPrecio-${produ.id}">${produPrecioFinal}</span></td>`)
            });

        $("#restar-"+ produ.id).click(function () { 
            
            produ.cantidad = produ.cantidad + -1;
            produPrecioFinal = produ.cantidad * produ.precio

            for (items of carrito){
            if(items.cantidad == 0){
                $("#itemTabla-"+ produ.id).remove();
                
            }else{
               
                console.log("son diferentes")
                $("#spanCantidad-"+ produ.id).remove();
                $("#spanPrecio-"+ produ.id).remove();
    
                $("#cantidad-"+ produ.id).append(`<span id="spanCantidad-${produ.id}">${produ.cantidad}</span></td>`)
                $("#precio-"+ produ.id).append(`<span id="spanPrecio-${produ.id}">${produPrecioFinal}</span></td>`)
    
                }   
            }

        });



    });   

 
});


/* Boton finalizar la compra */

$("#finCompra").click(function () { 

    

    carrito.forEach(item => {

        precioFinal.push(item.precio * item.cantidad)

    });
        
        const acumular = (acumulador, numero) => acumulador + numero;
        let total = precioFinal.reduce(acumular);
        alert(total)

        localStorage.removeItem("carrito")
        $('#cuerpoTabla').remove();
        numeroCompras = [];
        $("#bntCarrito").append(`<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> ${numeroCompras.length} </span>`)            
        
        location.href='index.html'

});
    
    


const listaProductos = document.getElementById('productos');
let carrito = [];
let carritoLLeno = [];
let numeroCompras = [];
localStorage.clear("carrito")

function agregarItem(objeto){

    Object.defineProperty(objeto, 'cant', {value: 1, writable: true});
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

    /* Fin lista de Productos*/


    let botonAgregar = document.getElementById('prod-' + prod.id)
        botonAgregar.addEventListener("click", () =>{ 
            numeroCompras.push(+1)
            $("#bntCarrito").append(`<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> ${numeroCompras.length} </span>`)
           
            let idEncontrado = false;
        for (item of carrito){
            if (item.id == prod.id){
                console.log("existe id igual");
                item.cant = item.cant + 1;
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



$("#bntCarrito").click(function () { 
     
    console.log(carritoLLeno)
    carrito.forEach(produ => {
        
        let contador = 0;


        $("#cuerpoTabla").append(`
        <tr>
        <td id="cantidad">${contador}</td>
        <td>${produ.marca}</td>
        <td>${produ.modelo}</td>
        <td>${produ.precio}</td>
        <td>${produ.cant * produ.precio}</td>
        <td>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button id="sumar" type="button" class="btnCarritoCuenta btn btn-success"></button>
        <button class="btnCarritoCuenta btn btn-danger"></button>
        </div>
        </div>
        </tr>
        `
        )
        
        $("#sumar").click(function (e) { 
            e.preventDefault();
            contador ++;

        });
    });   
       
});



 $("#finCompra").click(function () { 
    localStorage.removeItem("carrito")
    $('#cuerpoTabla').remove();
    numeroCompras = [];
    $("#bntCarrito").append(`<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> ${numeroCompras.length} </span>`)            
    location.href='index.html'

});
    



const listaProductos = document.getElementById('productos');
let carrito = [];
let numeroCompras = [];

function agregarItem(objeto){

    Object.defineProperty(objeto, 'cant', {value: 1, writable: true});
    carrito.push(objeto);
    console.log(carrito);

}
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
                <a class="ver" title="Detalles"><i class="ver">ver</i></i></a>
                <a id="prod-${prod.id}" class="comprar" title="Detalles"><i class="ver">Comprar</i></i></a>
                </div>
            </div>
        
    `
    listaProductos.appendChild(card)

    let boton = document.getElementById('prod-' + prod.id)
    boton.addEventListener("click", () =>{
        numeroCompras.push("se compro una " + prod.modelo)
        $("#bntCarrito").append(`<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> ${numeroCompras.length} </span>`)
        console.log("se agrego al carrito el producto: " + prod.marca + " " + prod.modelo)
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
    } )
})

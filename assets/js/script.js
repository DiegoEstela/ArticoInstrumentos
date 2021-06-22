

const listaProductos = document.getElementById('productos')

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
        console.log("se agrego al carrito el producto ID:" + prod.id)
    } )
})


let productos = [
    {
        id:0,
        marca: "fender",
        modelo: "Telecaster",
        anio: 1980,
        precio: 98000,
        imagen:"assets/img/productos/fender-telecaster.jpg",
        filtro: "filter-electricas"
    },
    {
        id:1,
        marca: "fender",
        modelo: "malibu",
        anio: 1996,
        precio: 95000,
        imagen:"assets/img/productos/fender-malibu.jpg",
        filtro: "filter-acusticas"
    },

    {
        id:2,
        marca: "taylor",
        modelo: "D400",
        anio: 2005,
        precio: 130500,
        imagen:"assets/img/productos/taylor-412electroacustic.jpg",
        filtro: "filter-electroAcusticas"
    },
    {
        id:3,
        marca: "gibson",
        modelo: "SG",
        anio: 1975,
        precio: 120000,
        imagen:"assets/img/productos/gibson-sg.jpg",
        filtro: "filter-electricas"
    },
    {
        id:4,
        marca: "gibson",
        modelo: "lespaul",
        anio: 1996,
        precio: 105000,
        imagen:"assets/img/productos/gibson-Lespaul.jpg",
        filtro: "filter-electricas"
    },
    {
        id:5,
        marca: "fender",
        modelo: "Stratocaster",
        anio: 1975,
        precio: 135000,
        imagen:"assets/img/productos/fender-stratocaster.jpg",
        filtro: "filter-electricas"
    }
]

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

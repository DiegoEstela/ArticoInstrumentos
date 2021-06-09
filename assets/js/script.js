
function saludar(){

    alert("Bienvenido a Artico Musica, no olvides de registrarte para recibir todas nuestras novedades")
}
class Procucto{
    
    constructor(marca,modelo,anio,precio,stock){

        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.anio = anio;
        this.precio = parseFloat(precio);
        this.stock = true;
    }

    preciofinal (){
        this.precio = this.precio * 1.21;
        }

    sinstock (){

        this.stock = false;
    }

    mostrarGuitarra() {

        var mostar =("Marca: " + this.marca + " Modelo: " + this.modelo + " Fabricada en: " + this.anio + " Su precio es: " + this.precio)
        return mostar;
    }

    mostrarNombre(){
        var mostrarNombre=(this.modelo);
        return mostrarNombre;
    }

}



const guitarraUno = new Procucto("fender","Telecaster",1980,98000);
const guitarraDos = new Procucto("fender","malibu",1996,95000);
const guitarraTres = new Procucto("Taylor","D400", 2005, 130500);
const guitarraCuatro = new Procucto("Gibson","SG",1975,120000);
const guitarraCinco = new Procucto("Gibson","LesPaul", 1996, 100500);
const guitarraSeis = new Procucto("fender","stratocaster",1975,128000);
const guitarraSiete = new Procucto("epiphone", "AJ-100", 1965, 221000);
const guitarraOcho = new Procucto("epiphone", "AJ-100", 1965, 221000);
const guitarraNueve = new Procucto("epiphone", "AJ-100", 1965, 221000);


const arrayGuitarras = [guitarraUno,guitarraDos,guitarraTres,guitarraCuatro,guitarraCinco,guitarraSeis,guitarraSiete,guitarraOcho,guitarraNueve];

const comprar = document.getElementsByClassName("comprar");
const especificaciones = document.getElementById("especificaciones");
const nombresMarcas = document.getElementById("exampleModalLabel");



    
comprar[0].addEventListener ("click", () => {

    especificaciones.innerText = arrayGuitarras[0].mostrarGuitarra();
    nombresMarcas.innerText = arrayGuitarras[0].mostrarNombre();
});

comprar[1].addEventListener ("click", () => {

    especificaciones.innerText = arrayGuitarras[1].mostrarGuitarra();
    nombresMarcas.innerText = arrayGuitarras[1].mostrarNombre();
});


comprar[2].addEventListener ("click", () => {

    especificaciones.innerText = arrayGuitarras[2].mostrarGuitarra();

});

comprar[3].addEventListener ("click", () => {

    especificaciones.innerText = arrayGuitarras[3].mostrarGuitarra();

});

comprar[4].addEventListener ("click", () => {

    especificaciones.innerText = arrayGuitarras[4].mostrarGuitarra();

});

comprar[5].addEventListener ("click", () => {

    especificaciones.innerText = arrayGuitarras[5].mostrarGuitarra();

});

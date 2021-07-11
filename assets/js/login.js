

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');


$("#form").submit(function (e) { 


    e.preventDefault();
    let users = [
        {
            usuario : username.value,
            contrasenia : password.value
        }
    ];
    
    sessionStorage.setItem('usuario', JSON.stringify(users));
    location.href='index.html'
    });


    
const saludo = document.getElementById('saludo');

let usernameDos = JSON.parse(sessionStorage.getItem('usuario'));

if (usernameDos != null){

    saludo.innerHTML = `<a class="nav-link scrollto active"> Hola ` + usernameDos[0].usuario +  `</a>`

    function agregarDatos(){

        let usersJson ={
            "user": usernameDos[0].usuario ,
            "password": usernameDos[0].contrasenia
        }
    
        $.post("https://jsonplaceholder.typicode.com/posts", usersJson).done(function(data, estado) {
            console.log("Estado que retorna POST jsonplaceholder: " + estado);
            console.log(data);
            console.log("Data de retorno: " + JSON.stringify(data));
        });
    }
    agregarDatos();
}






$("#titulo").animate({
    opacity:0.50,
    
}, 1500, function(){
    console.log("termino primer animacion");
});

$("#titulo").css("color","white")

    .delay(1500)
    .fadeOut(1500)
    .fadeIn(1500);

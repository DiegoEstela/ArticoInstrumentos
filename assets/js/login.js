const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');


form.addEventListener('submit',function(event){

    event.preventDefault();
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
}

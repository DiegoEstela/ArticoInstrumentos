const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit',function(event){
    
    let users = [
        {
            usuario : username.Value,
            contrasenia : password.Value
        }
    ];
    console.log(users)
});

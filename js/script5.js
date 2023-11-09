var nombre = document.getElementById('nombres');
var email = document.getElementById('email');
var seña = document.getElementById('contraseña');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log('Enviando formulario...');

    var mensajesError = [];

    if (nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tus nombres');
    }
    if (email.value === null || email.value === ''){
        mensajesError.push('Ingresa tu correo');
    }
    if (contraseña.value === null || contraseña.value === ''){
        mensajesError.push('Ingresa una contraseña');
    }
    error.innerHTML = mensajesError.join(', ');

    
}
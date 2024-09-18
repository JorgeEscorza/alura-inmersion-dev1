let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");

const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generar(){

    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser al menos 8 ");
        return;
    }

    let password = "";

    for (let i = 0; i < numeroDigitado; i++){
        
        let randomChar = Math.floor(Math.random() * caracteres.length);
        password += caracteres[randomChar];

    }

    contrasena.value = password;

}

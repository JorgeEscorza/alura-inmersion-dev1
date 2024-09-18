let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let seguridad = document.getElementById("seguridad");

const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function generar(){

    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8 || cantidad.value == ""){
        alert("La cantidad de caracteres tiene que ser al menos 8 ");
        return;
    }

    let password = "";

    for (let i = 0; i < numeroDigitado; i++){
        
        let randomChar = Math.floor(Math.random() * caracteres.length);
        password += caracteres[randomChar];

    }

    contrasena.value = password;

    let nivelSeguridad = calcularSeguridad(contrasena.value);

    if (nivelSeguridad == 4){
        seguridad.innerHTML = "La contraseña es fuerte";
    }else if (nivelSeguridad < 4 && nivelSeguridad > 1){
        seguridad.innerHTML = "La contraseña es medianamente fuerte";
    }else if (nivelSeguridad < 2){
        seguridad.innerHTML = "La contraseña es débil";
    }

}

function limpiar(){
    contrasena.value = "";
    cantidad.value = "";
    seguridad.innerHTML = "";
}

function calcularSeguridad(contrasena){

    let contador = 0;

    if (/[A-Z]/.test(contrasena)){
        contador++;
    }if (/[a-z]/.test(contrasena)){
        contador++;
    }if (/[0-9]/.test(contrasena)){
        contador++;
    }if (/[!"#$%&\'()*+,-./:;<=>?@\[\\\]^_`{|}~']/.test(contrasena)){
        contador++;
    }

    console.log(contador);

    return contador;

}

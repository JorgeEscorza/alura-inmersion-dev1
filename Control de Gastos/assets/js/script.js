let listaNombresGastos = [];
let listaValorGastos = [];
let listaDescripciones = [];

// Esta función se invoca al momento de que el usuario hace clic en el botón
function clickBoton(){

    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;
    let descripcion = document.getElementById("descripcion").value;

    const total = document.getElementById("totalGastos");
    const contenedorTotal = document.getElementById("contenedorTotal");

    if (Number(total.innerText) + Number(valorGasto) < 150){
        listaNombresGastos.push(nombreGasto);
        listaValorGastos.push(valorGasto);
        listaDescripciones.push(descripcion);
        actualizarListaGastos();
    }else{
        contenedorTotal.innerHTML += "<br> Límite de gastos alcanzado";
        limpiar();
    }
}

function actualizarListaGastos(){

    let htmlLista = "";
    const listaElementos = document.getElementById("listaDeGastos");
    //const totalElementos = document.getElementById("totalGastos");
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = listaValorGastos[posicion];
        const descripcion = listaDescripciones[posicion];
        htmlLista += `<li>${elemento} - USD ${Number(valorGasto).toFixed(2)}
                        <br>${descripcion}<br>
                        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                    </li>`

        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);//Number pasa todo a números y también acepta decimales

    });

    console.log(htmlLista);
    console.log(totalGastos);

    listaElementos.innerHTML = htmlLista;
    contenedorTotal.innerHTML = `Total Mensual: USD $<span id="totalGastos">${totalGastos.toFixed(2)}</span>`;
    //totalElementos.innerHTML = totalGastos.toFixed(2); //Cantidad de decimales que queremos que aparezcan
    limpiar();
}

function limpiar(){
    document.getElementById("nombreGasto").value = "";
    document.getElementById("valorGasto").value = "";
    document.getElementById("descripcion").value = "";
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion, 1); // En la posicion x, elimina 1 elemento
    listaValorGastos.splice(posicion, 1);

    actualizarListaGastos();

}

function autoResize(textarea){

    // Reseteamos la altura para calcular el nuevo tamaño.
    textarea.style.height = "auto";

    // Ajusta la altura en función del contenido.
    textarea.style.height = textarea.scrollHeight + "px";

    
}

const textareaField = document.getElementById("descripcion");
textareaField.addEventListener("input", () => autoResize(textareaField));
autoResize(textareaField);
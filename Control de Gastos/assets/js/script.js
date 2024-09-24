let listaNombresGastos = [];
let listaValorGastos = [];

// Esta función se invoca al momento de que el usuario hace clic en el botón
function clickBoton(){

    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;

    console.log(nombreGasto);
    console.log(valorGasto);

    listaNombresGastos.push(nombreGasto);
    listaValorGastos.push(valorGasto);

    console.log(listaNombresGastos);
    console.log(listaValorGastos);

    //alert("Click de usuario");
    actualizarListaGastos();
}

function actualizarListaGastos(){

    let htmlLista = "";
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById("totalGastos");
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = listaValorGastos[posicion];
        htmlLista += `<li>${elemento} - USD ${Number(valorGasto).toFixed(2)}
                        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                    </li>`

        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);//Number pasa todo a números y también acepta decimales

    });

    console.log(htmlLista);
    console.log(totalGastos);

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2); //Cantidad de decimales que queremos que aparezcan
    limpiar();
}

function limpiar(){
    document.getElementById("nombreGasto").value = "";
    document.getElementById("valorGasto").value = "";
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion, 1); // En la posicion x, elimina 1 elemento
    listaValorGastos.splice(posicion, 1);

    actualizarListaGastos();

}

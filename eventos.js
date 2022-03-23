let boton = getelementById("botonPrincipal");   /*Creando boton para mostrar botones */
boton.addEventListener("click",mostrarContenido);

function mostrarContenido() {
    document.getElementById("conteiner").style.display = "block"; /*Accedo al css mediante "Style", y luego a una parte especifica del css mediante (en este caso) .display = nuevo valor.*/
}

let boton2 = getElementById("botonQueOculta");  /*Creando boton para ocultar items */
boton2.addEventListener("click",ocultarContenido);

function ocultarContenido() {
    document.getElementById("conteiner").style.display = "none";
}
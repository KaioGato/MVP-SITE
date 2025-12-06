function showSobre(){
    var elementos = document.getElementsByClassName("sobre");
    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];
        var estiloDisplay = elemento.style.display;

        if (estiloDisplay === "flex" ) {
            elemento.style.display = "none"; // Ou qualquer outro valor desejado para exibição
        } else {
            elemento.style.display = "flex";
        }
    }
}
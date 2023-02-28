function mostrar(seccion, boton) {
    let cambiar = document.getElementsByClassName(seccion);
    document.getElementsByClassName(boton)[0].style.display = "none";
    for (let i = 0; i < cambiar.length; i++) {
        cambiar[i].style.display = "block";
    }
}
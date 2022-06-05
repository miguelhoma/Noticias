noticias_json = (noticias);

console.log(noticias_json);


function categoriaEntretenimiento(){

     for (let nD = 15, nA = 0; nA < 7; nA++) {
        document.getElementsByClassName("tittle")[nA].innerHTML = noticias_json[nD]["titulo"];
        document.getElementsByClassName("subtit")[nA].innerHTML = noticias_json[nD]["subtitulo"];
        document.getElementsByClassName("imgenContenido")[nA].src = noticias_json[nD]["imagenUrl"];
        document.getElementsByClassName("cont")[nA].innerHTML = noticias_json[nD]["noticiap1"];
        document.getElementsByClassName("cont1")[nA].innerHTML = noticias_json[nD]["noticiap2"];
        document.getElementsByClassName("cont2")[nA].innerHTML = noticias_json[nD]["noticiap3"];
        document.getElementsByClassName("fuente")[nA].innerHTML = noticias_json[nD]["autor"];

    }

}

categoriaEntretenimiento()
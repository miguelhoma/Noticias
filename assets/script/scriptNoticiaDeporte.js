noticias_json = (noticias);

console.log(noticias_json);


function categoriaDeporte(){

     for (let nA = 0; nA < 7; nA++) {
        document.getElementsByClassName("tittle")[nA].innerHTML = noticias_json[nA]["titulo"];
        document.getElementsByClassName("subtit")[nA].innerHTML = noticias_json[nA]["subtitulo"];
        document.getElementsByClassName("imgenContenido")[nA].src = noticias_json[nA]["imagenUrl"];
        document.getElementsByClassName("cont")[nA].innerHTML = noticias_json[nA]["noticiap1"];
        document.getElementsByClassName("cont1")[nA].innerHTML = noticias_json[nA]["noticiap2"];
        document.getElementsByClassName("cont2")[nA].innerHTML = noticias_json[nA]["noticiap3"];
        document.getElementsByClassName("fuente")[nA].innerHTML = noticias_json[nA]["autor"];

    }

}

categoriaDeporte()
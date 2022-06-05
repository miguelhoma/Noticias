noticias_json = (noticias);

console.log(noticias_json);


function categoryTechno(){

     for (let nA = 0, nB = 28; nA < 7; nA++) {
        document.getElementsByClassName("tittle techno uno")[nA].innerHTML = noticias_json[nB]["titulo"];
        document.getElementsByClassName("subtit techno uno")[nA].innerHTML = noticias_json[nB]["subtitulo"];
        document.getElementsByClassName("imgenContenido techno uno")[nA].src = noticias_json[nB]["imagenUrl"];
        document.getElementsByClassName("cont techno uno")[nA].innerHTML = noticias_json[nB]["noticiap1"];
        document.getElementsByClassName("cont1 techno uno")[nA].innerHTML = noticias_json[nB]["noticiap2"];
        document.getElementsByClassName("cont2 techno uno")[nA].innerHTML = noticias_json[nB]["noticiap3"];
        document.getElementsByClassName("fuente techno uno")[nA].innerHTML = noticias_json[nB]["autor"];

    }

}

categoryTechno();
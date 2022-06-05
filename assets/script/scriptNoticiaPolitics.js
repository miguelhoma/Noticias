noticias_json = (noticias);

console.log(noticias_json);


function categoryPolitics(){

     for (let nA = 0, nB = 21; nA < 7; nA++) {
        document.getElementsByClassName("tittle politics uno")[nA].innerHTML = noticias_json[nB]["titulo"];
        document.getElementsByClassName("subtit politics uno")[nA].innerHTML = noticias_json[nB]["subtitulo"];
        document.getElementsByClassName("imgenContenido politics uno")[nA].src = noticias_json[nB]["imagenUrl"];
        document.getElementsByClassName("cont politics uno")[nA].innerHTML = noticias_json[nB]["noticiap1"];
        document.getElementsByClassName("cont1 politics uno")[nA].innerHTML = noticias_json[nB]["noticiap2"];
        document.getElementsByClassName("cont2 politics uno")[nA].innerHTML = noticias_json[nB]["noticiap3"];
        document.getElementsByClassName("fuente politics uno")[nA].innerHTML = noticias_json[nB]["autor"];

    }

}

categoryPolitics();
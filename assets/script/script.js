noticias_json = (noticias);

console.log(noticias_json);


function categoriaDeporte(){

     for (let nA = 0; nA < 7; nA++) {
        document.getElementsByClassName("newsTitle")[nA].innerHTML = noticias_json[nA]["titulo"];
        document.getElementsByClassName("newsSubtitle")[nA].innerHTML = noticias_json[nA]["subtitulo"];
        document.getElementsByClassName("newsImg")[nA].src = noticias_json[nA]["imagenUrl"];
        document.getElementsByClassName("tit")[0].innerHTML = noticias_json[0]["categoria"];
    }

}

categoriaDeporte();

/*  Proceso mental de Harsh para descrubrir el loop para obtener categorías

    newsTitle[nA]         noticias_json[nA]
    newsSubtitle[nA]      noticias_json[nA] 
    newsImg[nA]           noticias_json[nA]  

*/
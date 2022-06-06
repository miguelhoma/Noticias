let noticias_json = (noticias);

function indexScript(){

    for (let nA = 0, nB = 15; nA < 6 & nB < 112; nA++, nB+=8){
        document.getElementsByClassName("tituloIndex")[nA].innerHTML = noticias_json[nB]["titulo"];
        document.getElementsByClassName("subtituloIndex")[nA].innerHTML = noticias_json[nB]["subtitulo"];
        document.getElementsByClassName("imagenIndex")[nA].src = noticias_json[nB]["imagenUrl"];
    }
    
    document.getElementsByClassName("parrafoIndex")[0].innerHTML = noticias_json[15]["noticiap1"]
}

indexScript();

/*  
noticias_html = document.getElementsByClassName("noticia")

for (let nA = 0; nA < 6; nA++) {
    nB = getRandomInt(0, noticias_json.length() -1)
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


*/
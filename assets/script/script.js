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




function categoryEconomy(){

    for (let nC = 0, nB = 7; nC < 7 & nB < 14; nC++, nB++){
        document.getElementsByClassName("newsTitle Actualidad")[nC].innerHTML = noticias_json[nB]["titulo"];
        document.getElementsByClassName("newsSubtitle Actualidad")[nC].innerHTML = noticias_json[nB]["subtitulo"];
        document.getElementsByClassName("newsImg Actualidad")[nC].src = noticias_json[nB]["imagenUrl"];
        document.getElementsByClassName("tit Actualidad")[0].innerHTML = noticias_json[7]["categoria"];

}

}




function categoryPolitica(){

    for (let aX = 0, aY = 21; aX < 7 & aY < 28; aX++, aY++){
        document.getElementsByClassName("newsTitle politica")[aX].innerHTML = noticias_json[aY]["titulo"];
        document.getElementsByClassName("newsSubtitle politica")[aX].innerHTML = noticias_json[aY]["subtitulo"];
        document.getElementsByClassName("newsImg politica")[aX].src = noticias_json[aY]["imagenUrl"];
        document.getElementsByClassName("tit politica")[0].innerHTML = noticias_json[28]["categoria"];
    }
}


categoriaDeporte(); categoryEconomy(); catergoryPolitica();
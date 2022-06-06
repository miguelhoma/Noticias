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


function categoryEconomy(){

    for (let nC = 0, nB = 7; nC < 7 & nB < 14; nC++, nB++){
        document.getElementsByClassName("newsTitle EconomyJS")[nC].innerHTML = noticias_json[nB]["titulo"];
        document.getElementsByClassName("newsSubtitle EconomyJS")[nC].innerHTML = noticias_json[nB]["subtitulo"];
        document.getElementsByClassName("newsImg EconomyJS")[nC].src = noticias_json[nB]["imagenUrl"];
        document.getElementsByClassName("tit EconomyJS")[0].innerHTML = noticias_json[7]["categoria"];

}

}


categoryEconomy();

function categoryPolitica(){

    for (let aC = 0, aB = 21; aC < 7 & aB < 28; aC++, aB++){
        document.getElementsByClassName("newsTitle politica")[aC].innerHTML = noticias_json[aB]["titulo"];
        document.getElementsByClassName("newsSubtitle politica")[aC].innerHTML = noticias_json[aB]["subtitulo"];
        document.getElementsByClassName("newsImg politica")[aC].src = noticias_json[aB]["imagenUrl"];
        document.getElementsByClassName("tit politica")[0].innerHTML = noticias_json[aB]["categoria"];
    }
}



categoryPolitica();




function categoryTechnology(){

    for (let bC = 0, bB = 28; bC < 7 & bB < 35; bC++, bB++){
        document.getElementsByClassName("newsTitle technology")[bC].innerHTML = noticias_json[bB]["titulo"];
        document.getElementsByClassName("newsSubtitle technology")[bC].innerHTML = noticias_json[bB]["subtitulo"];
        document.getElementsByClassName("newsImg technology")[bC].src = noticias_json[bB]["imagenUrl"];
        document.getElementsByClassName("tit technology")[bC].innerHTML = noticias_json[bB]["categoria"];
    }
  
}


categoryTechnology();





function categoryScience(){

    for (let cC = 0, cB = 35; cC < 7 & cB < 42; cC++, cB++){
        document.getElementsByClassName("newsTitle ScienceJS")[cC].innerHTML = noticias_json[cB]["titulo"];
        document.getElementsByClassName("newsSubtitle ScienceJS")[cC].innerHTML = noticias_json[cB]["subtitulo"];
        document.getElementsByClassName("newsImg ScienceJS")[cC].src = noticias_json[cB]["imagenUrl"];
        document.getElementsByClassName("tit ScienceJS")[0].innerHTML = noticias_json[cC]["categoria"];
    }
  
}



function categoryEntertainment(){

    for (let dC = 0, dB = 14; dC < 7 & dB < 21; dC++, dB++){
        document.getElementsByClassName("newsTitle ScienceJS")[dC].innerHTML = noticias_json[dB]["titulo"];
        document.getElementsByClassName("newsSubtitle ScienceJS")[dC].innerHTML = noticias_json[dB]["subtitulo"];
        document.getElementsByClassName("newsImg ScienceJS")[dC].src = noticias_json[dB]["imagenUrl"];
        document.getElementsByClassName("tit ScienceJS")[0].innerHTML = noticias_json[dB]["categoria"];
    }

}


console.log(noticias_json[28]);
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


/*  Proceso mental de Harsh para descrubrir el loop para obtener categorías

    newsTitle[nA]         noticias_json[nA]
    newsSubtitle[nA]      noticias_json[nA] 
    newsImg[nA]           noticias_json[nA]  

*/

// function para categoría de actualidad, en prueba con economía
// function categoriaActualidad(){

//     let nA = -1; 

//     while(nA < 6){

//         nA ++;
//         let nB = 7;

//             while ( nB < 14) {   

//             document.getElementsByClassName("newsTitle Act")[nA].innerHTML = noticias_json[nB]["titulo"];
//             document.getElementsByClassName("newsSubtitle Act")[nA].innerHTML = noticias_json[nB]["subtitulo"];
//             document.getElementsByClassName("newsImg Act")[nA].src = noticias_json[nB]["imagenUrl"];
//             document.getElementsByClassName("tit Act")[0].innerHTML = noticias_json[7]["categoria"];
//             nB++;
            
//             }
    
//     }

// }
function categoryEconomy(){

    for (let nC = 0, nB = 7; nC < 7 & nB < 14; nC++, nB++){
        document.getElementsByClassName("newsTitle Actualidad")[nC].innerHTML = noticias_json[nB]["titulo"];
        document.getElementsByClassName("newsSubtitle Actualidad")[nC].innerHTML = noticias_json[nB]["subtitulo"];
        document.getElementsByClassName("newsImg Actualidad")[nC].src = noticias_json[nB]["imagenUrl"];
        document.getElementsByClassName("tit Actualidad")[0].innerHTML = noticias_json[7]["categoria"];

}

}




function categoryPolitica(){

    for (let aC = 0, aB = 21; aC < 7 & aB < 28; aC++, aB++){
        document.getElementsByClassName("newsTitle politica")[aC].innerHTML = noticias_json[aB]["titulo"];
        document.getElementsByClassName("newsSubtitle politica")[aC].innerHTML = noticias_json[aB]["subtitulo"];
        document.getElementsByClassName("newsImg politica")[aC].src = noticias_json[aB]["imagenUrl"];
        document.getElementsByClassName("tit politica")[0].innerHTML = noticias_json[28]["categoria"];
    }
}



categoryPolitica();


categoryEconomy();


function categorySociedad(){

    for (let nC = 0, nB = 56; nC < 7 & nB < 63; nC++, nB++){
        document.getElementsByClassName("newsTitle Sociedad")[nC].innerHTML = noticias_json[nB]["titulo"];
        document.getElementsByClassName("newsSubtitle Sociedad")[nC].innerHTML = noticias_json[nB]["subtitulo"];
        document.getElementsByClassName("newsImg Sociedad")[nC].src = noticias_json[nB]["imagenUrl"];
        document.getElementsByClassName("tit Sociedad")[0].innerHTML = noticias_json[7]["categoria"];

}

}

categoryEconomy();
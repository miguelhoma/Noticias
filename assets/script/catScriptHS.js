
noticias_json = (noticias);

function categoryAll(){
 
    contentAll = "";
    for (let bB = 0; bB < 112; bB++){
        contentAll += '<div class="imagencConCategory"><img class="newsImg" src="" alt=""><div class="titulos"><div class="catName">titulo</div><div class="newsTitle">titulo</div><div class="newsSubtitle">subtiulo</div></div></div>';
    }
    document.getElementsByClassName("categoryAll")[0].innerHTML = contentAll;
}

categoryAll();


function fillCat(){
    for (let nA = 0; nA < noticias_json.length; nA++) {
        document.getElementsByClassName("newsTitle")[nA].innerHTML = noticias_json[nA]["titulo"];
        document.getElementsByClassName("newsSubtitle")[nA].innerHTML = noticias_json[nA]["subtitulo"];
        document.getElementsByClassName("newsImg")[nA].src = noticias_json[nA]["imagenUrl"];
        document.getElementsByClassName("catName")[nA].innerHTML = noticias_json[nA]["categoria"];
}
}
fillCat();




/*--------------------Test; numero de noticias en página web sea el mismo que numero de noticias de array------------- */
/*----------------------Descargar jquery en console para que funcione, $.length es de jquery----------------*/
// function testNewsNumbr (){

//         const number = noticias_json.length;
//         const numberTest = $('div.newsTitle').length;
//         if (number == numberTest) {
//             console.log("all good");
//           } else {
//             console.log("all bad");
//           };
    
// }

// testNewsNumbr();

/*---------Acaba función del test----------------*/
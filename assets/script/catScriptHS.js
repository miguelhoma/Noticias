
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
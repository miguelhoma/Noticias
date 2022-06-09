
noticias_json = (noticias);

function createCat(){
 
    contentAll = "";

    for (let bB = 0; bB < noticias_json.length; bB++){
        // if (bB == 0){
        //     contentAll +='<div class="tit" id="deportes">Deportes <a href=#backHome><span><img class="imagenLogoIcon" src="/assets/img/globeLogoIcon.jpeg" alt="Go on Top"></span></a></div>'+'<div class="imagencConCategory"><img class="newsImg" src="" alt=""><div class="titulos"><div class="catName">categoría</div><div class="newsTitle">titulo</div><div class="newsSubtitle">subtiulo</div></div></div>';        
        // }
        // if (bB == 6){
        //     contentAll +='<div class="tit" id="economia">Economía <a href=#backHome><span><img class="imagenLogoIcon" src="/assets/img/globeLogoIcon.jpeg" alt="Go on Top"></span></a></div>'+'<div class="imagencConCategory"><img class="newsImg" src="" alt=""><div class="titulos"><div class="catName">categoría</div><div class="newsTitle">titulo</div><div class="newsSubtitle">subtiulo</div></div></div>';        
        // }
        // if (bB == 12){
        //     contentAll +='<div class="tit" id="enter">Entretenimiento <a href=#backHome><span><img class="imagenLogoIcon" src="/assets/img/globeLogoIcon.jpeg" alt="Go on Top"></span></a></div>'+'<div class="imagencConCategory"><img class="newsImg" src="" alt=""><div class="titulos"><div class="catName">categoría</div><div class="newsTitle">titulo</div><div class="newsSubtitle">subtiulo</div></div></div>';        
        // }
        // if (bB == 18){
        //     contentAll +='<div class="tit" id="politica">Política <a href=#backHome><span><img class="imagenLogoIcon" src="/assets/img/globeLogoIcon.jpeg" alt="Go on Top"></span></a></div>'+'<div class="imagencConCategory"><img class="newsImg" src="" alt=""><div class="titulos"><div class="catName">categoría</div><div class="newsTitle">titulo</div><div class="newsSubtitle">subtiulo</div></div></div>';        
        // }
        // if (bB == 24){
        //     contentAll +='<div class="tit" id="techno">Tecnología <a href=#backHome><span><img class="imagenLogoIcon" src="/assets/img/globeLogoIcon.jpeg" alt="Go on Top"></span></a></div>'+'<div class="imagencConCategory"><img class="newsImg" src="" alt=""><div class="titulos"><div class="catName">categoría</div><div class="newsTitle">titulo</div><div class="newsSubtitle">subtiulo</div></div></div>';        
        // }
        contentAll += '<div class="imagencConCategory"><img class="newsImg" src="" alt=""><div class="titulos"><div class="catName">categoría</div><div class="newsTitle">titulo</div><div class="newsSubtitle">subtiulo</div></div></div>';
        
    }

    document.getElementsByClassName("categoryAll")[0].innerHTML = contentAll;

    function fillCat(){
        for (let nA = 0; nA < noticias_json.length; nA++) {
            document.getElementsByClassName("newsTitle")[nA].innerHTML = noticias_json[nA]["titulo"];
            document.getElementsByClassName("newsSubtitle")[nA].innerHTML = noticias_json[nA]["subtitulo"];
            document.getElementsByClassName("newsImg")[nA].src = noticias_json[nA]["imagenUrl"];
            document.getElementsByClassName("catName")[nA].innerHTML = noticias_json[nA]["categoria"];
        }
    }

    fillCat();
}

createCat();


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



/*---------Test función para ver si cada noticia está en su lugar-------*/

// function rightPlace(){

//     for(tT = 0; tT <7; tT++){
//         if (document.getElementsByClassName("catName")[tT].textContent.includes("Deporte")) {
//         console.log("Cat dep correct");
//         } else {
//         console.log("cat dep incorrect");
//         }
//     }

//     for(tT = 7; tT <14; tT++){
//         if (document.getElementsByClassName("catName")[tT].textContent.includes("Economía")) {
//         console.log("Cat eco correct");
//         } else {
//         console.log("cat eco incorrect");
//         }
//     }

//     for(tT = 14; tT <21; tT++){
//         if (document.getElementsByClassName("catName")[tT].textContent.includes("entretenimiento")) {
//         console.log("Cat entre correct");
//         } else {
//         console.log("cat entre incorrect");
//         }
//     }

//     for(tT = 21; tT <28; tT++){
//         if (document.getElementsByClassName("catName")[tT].textContent.includes("politica")) {
//         console.log("Cat poli correct");
//         } else {
//         console.log("cat poli incorrect");
//         }
//     }

// }

// rightPlace();


/*---------Test función para ver si cada noticia está en su lugar acaba-------*/
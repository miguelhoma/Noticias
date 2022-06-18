
let noticias_json = (noticias);
// function firt_display(){
//     if (window.location.href.includes("?id=")){
//         categoria =GetParam();//take name of category from window url
//         sort(categoria);//sort data of categoria with method 'bubble sort'
//         display_data(categoria, true);// display 6 news and button (if out database has more news)
//         //display_choose(categoria);//highlight  category
//         // let a="index.html";  //the logo already has link in html for index start page
//         // document.getElementById("ahref").href =a;//make href and put on button 'back'    'ahref' is id of button 'back'
//     }else{
//         noticiasPrueba ();
//     }
// }
// function GetParam(){
//     let url = window.location.href//window.location - current page; href -url of window
//     let temp = url.split("=") 
//     let answer=temp[1]; // take word(name of categoria) after '='
//     console.log(answer);
//     if(answer.includes('%C3%AD')){answer=answer.replace('%C3%AD', 'í')}
//     if(answer.includes('%C3%B3')){answer=answer.replace('%C3%B3', 'ó')}
//     console.log(answer);
//     return answer
// }

// function sort(categoria){
//     for (var i=0;i<noticias_json.length;i++){
//         for (var j=0;j<noticias_json.length;j++){
//             if (noticias_json[i]["categoria"] == categoria &&noticias_json[j]["categoria"] == categoria ){
//                 if (noticias_json[i]["fecha"]<noticias_json[j]["fecha"]){
//                     var temp = noticias_json[i]
//                     noticias_json[i] = noticias_json[j]
//                     noticias_json[j] = temp
//                 }
//             }
            
//         }
//     }
//     for (var i=0;i<noticias_json.length;i++){

//             if (noticias_json[i]["categoria"] == categoria){
//             }

//     }
// }

// function display_data(categoria){
    
//     let news_html = '';//  text for news and button
//     let index =map.get(categoria);// array index which we stopped
//     let amount=0;// amount of added news

//     while ( index < noticias_json.length && amount<6) {
        
//         if (noticias_json[index]["categoria"] == categoria){
//             news_html += news_to_HTML(noticias_json[index],index);// make div and put it on text
//             amount++;// + 1 added news
//         }
//         index++;//next index of array

//     }
//     flag=false;
//     while ( index < noticias_json.length && amount<7) {
//         if (noticias_json[index]["categoria"] == categoria){
//             flag=true;// if database has more news we make button
//             amount++;
//         }
//         index++

//     }
//     if (flag == true){news_html +=add_button()}// make button and put it on text
//     document.querySelector("content").innerHTML+= news_html;//put  text on html page  
//     map.set(categoria,index)// for no repetition news
// }

// function news_to_HTML(news,index){
//     let answer = '<div class="imagencConCategory">\
//                     <img class="newsImg politica" src="'+news["imagenUrl"]+'" alt="'+news["alt"]+'">\
//                     <div class="titulos">\
//                         <div class="newsTitle politica"> <a href="index.html?id='+index+'"  >'+news["titulo"]+'</a></div>\
//                         <div class="newsSubtitle politica">'+news["subtitulo"]+'</div>\
//                     </div>\
//                  </div>';
//     return answer
// }

// function add_button(){
//     let answer = '<div class="button">\
//                     <button  id="ver_mas"  onclick="on_button_clicked()">Ver mas</button>\
//                 </div>';
//     return answer

// }

// function display_choose(categoria){
//     let button = document.getElementById(categoria);
//     button.style.backgroundColor = 'rgb(188,188,188)';
// }

// function on_button_clicked(){
//     categoria =GetParam();//take name of category from window url
//     document.getElementById("ver_mas").remove();// button disappears
//     display_data(categoria)//display 6 news and button (if out database has more news)
// }

function  noticiasAleatoriasDelIndex(newsID, titulo, subtitulo, urlImagen, alt){
    /*
    noticiasAleatorias = `<div class="imagencConCategory">`
    noticiasAleatorias +=`<img class="newsImg" src= ${urlImagen} alt=${alt}>`
    noticiasAleatorias +=`<div class="titulos">`
    noticiasAleatorias +=`<a href="index.html?id=${newsID}"> <div class="newsTitle">${titulo}</div></a>`
    noticiasAleatorias +=`<div class="newsSubtitle">${subtitulo}</div>`
    noticiasAleatorias +=`</div>`
    noticiasAleatorias +=`</div>`
    return noticiasAleatorias;
    */
    
    noticiasAleatorias = `<article class="firstnews">\
            <div class="outstanding_one">\
                <img class="img_one imagenIndex" src="${urlImagen}" alt="${alt}">\
                <div class="text_one">\
                    <a href="index.html?id=${newsID}">\
                        <div class="title_one tituloIndex">\
                            <p1>${titulo}</p1>\
                        </div>\
                    
                        <div class="subtitle_one subtituloIndex">\
                            <p2>${subtitulo}</p2>\
                        </div>\
                        <div class="subtitle parrafoIndex">\
                            <p2></p2>\
                        </div>\
                    </a>\
                </div>\
            </div>\
            <div class="box_one">\
                <div class="outstanding_two boxOneNot">\
                    <img class="img_two imgBoxOne imagenIndex" src="${urlImagen}" alt="${alt}">\
                    <div class="text_two">\
                        <a href="index.html?id=${newsID}">\
                            <div class="title titleBoxOne tituloIndex">\
                                <p1>${titulo}</p1>\
                            </div>\
                            <div class="subtitle subtitleBoxOne subtituloIndex">\
                                <p2>${subtitulo}</p2>\
                            </div>\
                        </a>\
                    </div>\
                </div>\
                <div class="outstanding_three boxOneNot">\
                    <img class="img_three imgBoxOne imagenIndex" src="${urlImagen}" alt="${alt}">\
                    <div class="text_three">\
                        <a href="index.html?id=${newsID}">\
                            <div class="title titleBoxOne tituloIndex">\
                                <p1>${titulo}</p1>\
                            </div>\
                            <div class="subtitle subtitleBoxOne subtituloIndex">\
                                <p2>${subtitulo}</p2>\
                            </div>\
                        </a>\
                    </div>\
                </div>\
            </div>\
        </article>\
        <article class="box_two">\
            <div class="outstanding_four">\
                <img class="img_four imgBoxTwo imagenIndex" src="${urlImagen}" alt="${alt}">\
                <div class="four">\
                    <a href="index.html?id=${newsID}">\
                    <div class="title titleBoxTwo tituloIndex">\
                        <p1>${titulo}</p1>\
                    </div>\
                    <div class="subtitle subtitleBoxTwo subtituloIndex">
                        <p2>${subtitulo}</p2>\
                    </div>\
                    </a>\
                </div>\
            </div>\
            <div class="outstanding_four">\
                <img class="img_four imgBoxTwo imagenIndex" src="${urlImagen}" alt="${alt}">\
                <div class="four">\
                    <a href="index.html?id=${newsID}">\
                    <div class="title titleBoxTwo  tituloIndex">\
                        <p1>${titulo}</p1>\
                    </div>\
                    <div class="subtitle subtitleBoxTwo  subtituloIndex">\
                        <p2>${subtitulo}</p2>\
                    </div>\
                    </a>\
                </div>\
            </div>\
            <div class="outstanding_four">\
                <img class="img_four imgBoxTwo imagenIndex" src=" ${urlImagen}" alt="${alt}">\
                <div class="four">\
                    <a href="index.html?id=${newsID}">\
                    <div class="title titleBoxTwo tituloIndex">\
                        <p1>${titulo}</p1>\
                    </div>\
                    <div class="subtitle subtitleBoxTwo subtituloIndex">\
                        <p2>${subtitulo}</p2>\
                    </div>\
                    </a>\
                </div>\
            </div>\
        </article>` 
    return noticiasAleatorias;
}

function noticiasPrueba (){
    noticiasAleatorias = '';
    
    for (let i = 0; i < 6 ; i++) {
        titulo = noticias_json[i]["titulo"];
        subtitulo = noticias_json[i]["subtitulo"];
        urlImagen = noticias_json[i]["urlImagen"];
        newsID = noticias_json[i]["newsID"];
        alt = noticias_json[i]["alt"];
        noticiasAleatorias = noticiasAleatoriasDelIndex(newsID,titulo,subtitulo,urlImagen,alt)
        
        //(noticias_json[i]["newsID"], noticias_json[i]["titulo"], subtitulo = noticias_json[i]["subtitulo"], urlImagen = noticias_json[i]["urlImagen"],noticias_json[i]["alt"] );
    
    }
    document.querySelector("content").innerHTML = noticiasAleatorias;
}

noticiasPrueba();


function indexScript(){

    for (let nA = 0, nB = 15; nA < 6 & nB < 112; nA++, nB+=8){
        document.getElementsByClassName("tituloIndex")[nA].innerHTML = noticias_json[nB]["titulo"];
        document.getElementsByClassName("subtituloIndex")[nA].innerHTML = noticias_json[nB]["subtitulo"];
        document.getElementsByClassName("imagenIndex")[nA].src = noticias_json[nB]["urlImagen"];
    }
    
    document.getElementsByClassName("parrafoIndex")[0].innerHTML = noticias_json[15]["contNoticia"]
}

indexScript();
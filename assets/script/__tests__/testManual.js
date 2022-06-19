/**Descargar jquery para los test */

noticias_json = (noticias);

function testNewsPage(){
    url = GetParam();
    let numberOfElements = 1;
    if(!isNaN(url)){

        if ($('div.tittle').length == numberOfElements && document.querySelector(".tittle").textContent == noticias_json[url-100]["titulo"]){
            console.log("solo hay un titulo y es el correcto");
        } else {console.log("Algo anda mal con titulo")}
        
        if ($('div.subtit').length == numberOfElements && document.querySelector(".subtit").textContent == noticias_json[url-100]["subtitulo"]){
            console.log("solo hay un subtiutlo y es el correcto");
        } else {console.log("Algo anda mal con subtitulo")}

        if ($('.imagenContenido').length == numberOfElements && document.querySelector(".imagenContenido").src == noticias_json[url-100]["urlImagen"]){
            console.log("solo hay una imagen y es la correcta");
        } else {console.log("Algo anda mal con la imagen")}

        if ($('div.lineaUno').length == numberOfElements){
            
            if ($('div.fecha').length == numberOfElements && document.querySelector(".fecha").textContent == noticias_json[url-100]["fecha"] ){
                console.log("Solo hay una fecha y está bien")
            } else {console.log("Algo anda mal con la fecha")}
            
            if ($('div.autor').length == numberOfElements && document.querySelector(".autor").textContent.includes(noticias_json[url-100]["autor"]) ){
                console.log("Solo hay una/un autor/a y está bien")
            } else {console.log("Algo anda mal con el/la autor/a")}
            
            if ($('div.nombreDeCategoria').length == numberOfElements && document.querySelector(".nombreDeCategoria").textContent == noticias_json[url-100]["categoria"]){
                console.log("Solo hay una categoría y está bien")
            } else {console.log("Algo anda mal con la categoría")}   
        } else {console.log("Algo anda mal con la fecha o autor o categoria o la linea")}

        if ($('.cont').length == numberOfElements){
            console.log("Solo hay un contenido");
            for (i = 0; i < parrafoContenidoSeparado.length; i++){     
                parrafoContenidoSeparado = noticias_json[url-100]["contNoticia"].split("\\n"); 
                if (document.getElementsByClassName("parrafoNoticia")[i].textContent == parrafoContenidoSeparado[i]){
                    console.log("El parrafo " + (i + 1) + " tiene contenido correcto" )
                } else {console.log("El contenido de la página está mal")}}}  
        
        if(document.querySelector(".linkNoticia").href == noticias_json[url-100]["urlNoticia"]){
            console.log("Link de origen correcto")
        }else{console.log("Origen 404")}
    } else{
         console.log("No estamos en una noticia")
       }
}
















// if(!isNaN(url)){
//     if ($('div.tittle').length == numberOfElements && document.querySelector(".tittle").textContent == noticias_json[url-100]["titulo"]){
//         console.log("solo hay un titulo y es el correcto");
//     } else {
//         console.log("Algo anda mal")
//       }
// } else if (isNaN(url)){
//     if ($('div.newsTitle').length == 8 || $('div.newsTitle').length ==  6)  {
//         console.log("hay la cantidad de titulos deseados")
//     } else{
//         console.log("falta alguna")
//     }
//   } else{
//      console.log("no estamos en una noticia")
//    }
noticias_json = (noticias);

console.log(noticias_json);

function categoriaDeporte(){

     for (let nA = 0; nA < 7; nA++) {
        document.getElementsByClassName("tittle")[nA].innerHTML = noticias_json[nA]["titulo"];
        document.getElementsByClassName("subtit")[nA].innerHTML = noticias_json[nA]["subtitulo"];
        document.getElementsByClassName("imgenContenido")[nA].src = noticias_json[nA]["imagenUrl"];

        // document.getElementsByClassName("cont1")[nA].innerHTML = noticias_json[nA]["noticiap2"];
        // document.getElementsByClassName("cont2")[nA].innerHTML = noticias_json[nA]["noticiap3"];
        document.getElementsByClassName("fuente")[nA].innerHTML = noticias_json[nA]["autor"];
        //function parrafoSplit () {
           
        //}
        
        let array = noticias_json;
        let array2 = array[0]["noticiap1"].split("\\n")
        document.getElementsByClassName("contenidoTotal")[0].innerHTML = '<div class="cont">'+array2[0]+'</div>'+'<div class="cont1">'+array2[1]+'</div>'+'<div class="cont1">'+array2[2]+'</div>';
        //parrafoSplit();
    }

}

let array = noticias_json;
let array2 = array[0]["noticiap1"].split("\\n");

console.log(array2);


//'<div class="cont">'+array2[0]+'</div>'+'<div class="cont1">'+array2[1]+'</div>'+'<div class="cont1">'+array2[2]+'</div>';

//let cont = noticias_json[0]["noticiap1"].split("\n");
categoriaDeporte();


// let array = noticias_json;

// let array2 = array[noticiap1].split("\n");

// console.log(array2);

// function parrafoSplit () {
//     let cont = noticias_json[0][noticiap1].split("\n");
//     document.getElementsByClassName("cont")[0].innerHTML = '<div>'+cont+'</div>';
// }

// parrafoSplit();
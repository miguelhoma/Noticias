noticias_json = (noticias);

console.log(noticias_json);

function categoriaNewsEconomy(){
    for (let aA = 0, aB = 7; aA < 7 & aB < 14; aA++, aB++) {
       document.getElementsByClassName("tittle newsenconomy")[aA].innerHTML = noticias_json[aB]["titulo"];
       document.getElementsByClassName("subtit newsenconomy")[aA].innerHTML = noticias_json[aB]["subtitulo"];
       document.getElementsByClassName("imgenContenido newsenconomy")[aA].src = noticias_json[aB]["imagenUrl"];
       document.getElementsByClassName("cont newsenconomy")[aA].innerHTML = noticias_json[aB]["noticiap1"];
       document.getElementsByClassName("cont1 newsenconomy")[aA].innerHTML = noticias_json[aB]["noticiap2"];
       document.getElementsByClassName("cont2 newsenconomy")[aA].innerHTML = noticias_json[aB]["noticiap3"];
       document.getElementsByClassName("fuente newsenconomy")[aA].innerHTML = noticias_json[aB]["autor"];

   }

}

categoriaNewsEconomy();

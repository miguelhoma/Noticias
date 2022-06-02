noticias_json = (noticias);

console.log(noticias_json);

lista = "";
for (let i=0; i<noticias_json.length; i++) {
    lista += "<p>"+noticias_json[i].titulo+"</p>";
}

document.getElementsByClassName("newsTitle")[0].innerHTML = lista;
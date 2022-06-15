
let noticias_json = (noticias);

function sort(categoria){
	for (var i=0;i<noticias_json.length;i++){
		for (var j=0;j<noticias_json.length;j++){
			if (noticias_json[i]["categoria"] == categoria &&noticias_json[j]["categoria"] == categoria ){
				if (noticias_json[i]["fecha"]<noticias_json[j]["fecha"]){
					var temp = noticias_json[i]
					noticias_json[i] = noticias_json[j]
					noticias_json[j] = temp
				}
			}
			
		}
	}
	for (var i=0;i<noticias_json.length;i++){

			if (noticias_json[i]["categoria"] == categoria){
			}

	}
}

function GetParam(){
	let url = window.location.href
	let temp = url.split("=")
	let answer=temp[1];
	if(answer.includes('%C3%AD')){answer=answer.replace('%C3%AD', 'í')}
	if(answer.includes('%C3%B3')){answer=answer.replace('%C3%B3', 'ó')}
	return answer
}

function display_data(categoria, flag){
	
	let news_html = '';
	let index =map.get(categoria);
	let amount=0;

	while ( index < noticias_json.length && amount<6) {
		
		if (noticias_json[index]["categoria"] == categoria){
			news_html += news_to_HTML(noticias_json[index]);
			amount++;
		}
		index++;

	}
	if(flag == true){
		news_html+=add_button()
	}
	document.querySelector("content").innerHTML+= news_html;
	map.set(categoria,index)
}

function news_to_HTML(news){
	let answer = '<div class="imagencConCategory">\
					<img class="newsImg " src="'+news["urlImagen"]+'" alt="'+news["alt"]+'">\
					<div class="titulos">\
						 <a href="index.html?id='+news["newsID"].toString()+'" ><div class="newsTitle ">'+news["titulo"]+'</div></a>\
						<div class="newsSubtitle ">'+news["subtitulo"]+'</div>\
				    </div>\
				 </div>';
	return answer
}

function firt_display(){
	console.log("hoa");
	categoria =GetParam();
	sort(categoria);
	display_data(categoria, true);
	let a = "index.html?id=" + categoria;
	document.getElementById("ahref").href = a;

}


/* función para mostrar noticia con click desde la página de categoria */
function GetParamNot(){
	let url = window.location.href;
	console.log(url);
	let temp = url.split("=");
	console.log(temp);
	let answer = temp[1];
	console.log(answer);
	return answer;
}


function newsPage_to_html(news){
    newsPage = '<section class="caja">\
					<div class="tittle">'+news["titulo"]+'</div>\
					<div class="subtit">'+news["subtitulo"]+'</div>\
					<div class="lineaUno"></div>\
					<div class="imagencont">\
						<img class="imagenContenido" src="'+news["urlImagen"]+'" alt="'+news["alt"]+'">\
					</div>\
					<div class="lineaDos"></div>\
					<div class="contenidoTotal">\
						<div class="fecha">'+news["fecha"]+'<div class = "autor">'+news["autor"]+'</div></div>\
						<div class="cont">'+news["contNoticia"]+'</div>\
						<div class="fuente">\
							<a href="'+news["urlNoticia"]+' target="_blank"><div class="cont3">Origen</div></a>\
						</div>\
				</section>';

    return newsPage;
}

function displayNewsData(noticiasIndex){

    let noticiaHtml = '';
    noticiaHtml += newsPage_to_html(noticias_json[noticiasIndex - 100]);
    document.querySelector("content").innerHTML = noticiaHtml;

}

function secondisplay(){
	noticias_json.sort(function(a,b){return a.newsID - b.newsID});
    noticiasIndex = GetParamNot();
    displayNewsData(noticiasIndex);
	console.log("noticia" + noticiasIndex);
}
































































function on_button_clicked(){
	categoria =GetParam();
	//let categoria = document.getElementById("ver_mas").type;
	document.getElementById("ver_mas").hidden = true;
	display_data(categoria,false)
	var flag=false;
	let i = map.get(categoria);
	let amount=6;
	while ( i < noticias_json.length && amount<7) {
		if (noticias_json[i]["categoria"] == categoria){
			flag=true;
			amount++;
		}
		i++

	}
	if (flag == true){add_button()}
	

}


function add_button(){
	let answer = '<div class="button">\
					<button  id="ver_mas"  onclick="on_button_clicked()">Ver mas</button>\
				</div>';
	return answer

}






	

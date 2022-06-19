
let noticias_json = (noticias);

function sort(categoria){
	for (var i=0;i<noticias_json.length;i++){
		for (var j=0;j<noticias_json.length;j++){
			if (noticias_json[i]["categoria"] == categoria &&noticias_json[j]["categoria"] == categoria ){
				// console.log(noticias_json[i]["fecha"])
				// console.log(noticias_json[j]["fecha"])
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
				//console.log(noticias_json[i])
			}

	}
}


function firt_display(categoria){
	sort(categoria);
	display_data(categoria);
}

sort("Política")
function on_button_clicked(categoria){
	//let categoria = document.getElementById("ver_mas").type;
	console.log(categoria)
	display_data(categoria)
	var flag=true;
	let i = map.get(categoria);
	let amount=6;
	while ( i < noticias_json.length && amount<7) {
		if (noticias_json[i]["categoria"] == categoria){
			flag=false;
			amount++;
		}
		i++

	}
	if (flag == true){document.getElementById("ver_mas").hidden = true;}
	

}

function display_data(categoria){
	
	let news_html = '';
	let politician_index =map.get(categoria);
	let amount=0;

	while ( politician_index < noticias_json.length && amount<6) {
		
		if (noticias_json[politician_index]["categoria"] == categoria){
			news_html += news_to_HTML(noticias_json[politician_index]);
			amount++;
		}
		politician_index++;

	}
	document.querySelector("content").innerHTML+= news_html;
	map.set(categoria,politician_index)
}

function news_to_HTML(news){
	let answer = '<div class="imagencConCategory">\
					<img class="newsImg politica" src="'+news["imagenUrl"]+'" alt="'+news["alt"]+'">\
					<div class="titulos">\
						<div class="newsTitle politica">'+news["titulo"]+'</div>\
						<div class="newsSubtitle politica">'+news["subtitulo"]+'</div>\
				    </div>\
				 </div>';
	return answer
}

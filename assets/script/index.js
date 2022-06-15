let noticias_json = (noticias);
function firt_display(){
	categoria =GetParam();//take name of category from window url
	let a="";
	if (isNaN(categoria)== false) {
		let id=parseInt(categoria)
		display_news(id)
		let cat=noticias_json[id]["categoria"];
		display_choose(cat);
		a="index.html?id="+id;

	}
	else if (categoria != "todo"){ // para alguona categoria
		sort(categoria);//sort data of categoria with method 'bubble sort'
		display_data(categoria, true);// display 6 news and button (if out database has more news)
		display_choose(categoria);//highlight  category
		a="index.html?id="+categoria;
	}
	else {// para todo categoria
		sort_todo();
		display_todo_data();
		a='index.html';
	} 
	
	document.getElementById("ahref").href =a;//make href and put on button 'back'    'ahref' is id of button 'back'
}
function GetParam(){
	let url = window.location.href//window.location - current page; href -url of window
	let answer ="";
	if (url.includes("=")){
		let temp = url.split("=") 
		answer=temp[1]; // take word(name of categoria) after '='
		console.log(answer);
		if(answer.includes('%C3%AD')){answer=answer.replace('%C3%AD', 'í')}
		if(answer.includes('%C3%B3')){answer=answer.replace('%C3%B3', 'ó')}
		

	}
	else{ answer = "todo"}
	console.log(answer);
	return answer
}





function display_choose(categoria){
	let button = document.getElementById(categoria);
	button.style.backgroundColor = 'rgb(188,188,188)';
}


//=========================================================================================
//                       para  categorias
//=========================================================================================

function news_to_HTML(news,index){
	let answer = '<div class="imagencConCategory">\
					<img class="newsImg politica" src="'+news["imagenUrl"]+'" alt="'+news["alt"]+'">\
					<div class="titulos">\
						<div class="newsTitle politica"> <a href="index.html?id='+index+'"  >'+news["titulo"]+'</a></div>\
						<div class="newsSubtitle politica">'+news["subtitulo"]+'</div>\
				    </div>\
				 </div>';
	return answer
}

function add_button(){
	let answer = '<div class="button">\
					<button  id="ver_mas"  onclick="on_button_clicked()">Ver mas</button>\
				</div>';
	return answer

}
function on_button_clicked(){
	document.getElementById("ver_mas").remove();
	// document.getElementById("ver_mas").hidden = true;// button disappears
	categoria =GetParam();//take name of category from window url
	
	if (categoria != 'todo'){
	    display_data(categoria)//display 6 news and button (if out database has more news)
    }
	else{
		display_todo_data();
	}
	
}
//=========================================================================================
//                       para alquina categorias
//=========================================================================================

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
}

function display_data(categoria){
	
	let news_html = '';//  text for news and button
	let index =map.get(categoria);// array index which we stopped
	let amount=0;// amount of added news

	while ( index < noticias_json.length && amount<6) {
		
		if (noticias_json[index]["categoria"] == categoria){
			news_html += news_to_HTML(noticias_json[index],index);// make div and put it on text
			amount++;// + 1 added news
		}
		index++;//next index of array

	}
	let flag = false;
	while ( index < noticias_json.length && amount<7) {
		if (noticias_json[index]["categoria"] == categoria){
			flag=true;// if database has more news we make button
			amount++;
		}
		index++

	}
	if (flag == true){news_html +=add_button()}// make button and put it on text
	document.querySelector("content").innerHTML+= news_html;//put  text on html page  
	map.set(categoria,index)// for no repetition news
}

//=========================================================================================
//                       para toda categorias
//=========================================================================================
function sort_todo(){
	for (var i=0;i<noticias_json.length;i++){
		for (var j=0;j<noticias_json.length;j++){
			if (noticias_json[i]["fecha"]<noticias_json[j]["fecha"]){
				var temp = noticias_json[i]
				noticias_json[i] = noticias_json[j]
				noticias_json[j] = temp
			}
			
		}
	}

}
function display_todo_data(){
	let news_html = '';//  text for news and button
	let index =map.get('todo');// array index which we stopped
	let amount=0;// amount of added news

	while ( index < noticias_json.length && amount<6) {
		
		news_html += news_to_HTML(noticias_json[index],index);// make div and put it on text
		amount++;// + 1 added news
		index++;//next index of array

	}
	let flag = false;
	if ( index < noticias_json.length-1) {
		flag=true;// if database has more news we make button
		index++

	}
	if (flag == true){news_html +=add_button()}// make button and put it on text
	document.querySelector("content").innerHTML+= news_html;//put  text on html page  
	map.set('todo',index)// for no repetition news
}

//=========================================================================================
//                       para  news
//=========================================================================================
function display_news(id){
	console.log(noticias_json[id]["noticiap1"])
	console.log(noticias_json[id]["autor"])
	let ps =[] ;
	if (ps.includes('//n')){
		ps= noticias_json[id]["noticiap1"].split('//n');
	}
    else{
		ps = noticias_json[id]["noticiap1"].split('\\n');
	}
	
	let text ='<div class="news">\
	        <img class="newsImg1" src="'+noticias_json[id]["imagenUrl"]+'"/>\
	        <h6>'+noticias_json[id]["alt"]+'</h6>\
			<br/>\
			<br/>\
	        <p>\
		        '+ps[0]+'\
	        </p>\
	        <br/>\
	        <p>\
			    '+ps[1]+'\
		    </p>\
			<br/>\
			<p>\
			    '+ps[2]+'\
	        </p>';
	document.querySelector("content").innerHTML+= text;

}
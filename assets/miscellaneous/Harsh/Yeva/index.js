let noticias_json = noticias;

function firt_display() {
  categoria = GetParam(); //take name of category from window url
  sort(categoria); //sort data of categoria with method 'bubble sort'
  display_data(categoria, true); // display 6 news and button (if out database has more news)
  //display_choose(categoria);//highlight  category
  // let a="index.html";  //the logo already has link in html for index start page
  // document.getElementById("ahref").href =a;//make href and put on button 'back'    'ahref' is id of button 'back'
}
function GetParam() {
  let url = window.location.href; //window.location - current page; href -url of window (автоматически)
  let temp = url.split("="); //темп это массив. разделяем его командой сплит на первую чать, то что тдо знака "=" и вторую - то что после
  let answer = temp[1]; // здесь находится название категориию (в зависимости от названия категории (отображается в урл после знака "=") достаем данные для отображения на странице) 1 потому что первой позицией в арае у нас знак =
  console.log(answer); //отобразить в консоли для разработчика как заменили í с помощью %C3%AD. Это отображает до if
  if (answer.includes("%C3%AD")) {
    answer = answer.replace("%C3%AD", "í");
  }
  if (answer.includes("%C3%B3")) {
    answer = answer.replace("%C3%B3", "ó");
  }
  console.log(answer); // это в консоле отображает что получилось просле if
  return answer;
}

function sort(categoria) {
  // bubble sorting сортировка по дате с посмощью метода пузырька, чтобы первыми отображались самые свежие новости
  for (var i = 0; i < noticias_json.length; i++) {
    for (var j = 0; j < noticias_json.length; j++) {
      if (
        noticias_json[i]["categoria"] == categoria &&
        noticias_json[j]["categoria"] == categoria
      ) {
        if (noticias_json[i]["fecha"] < noticias_json[j]["fecha"]) {
          var temp = noticias_json[i];
          noticias_json[i] = noticias_json[j];
          noticias_json[j] = temp;
        }
      }
    }
  }
}

function display_data(categoria) {
  let news_html = ""; //  text for news and button
  let index = map.get(categoria); // array index which we stopped
  let amount = 0; // amount of added news

  while (index < noticias_json.length && amount < 6) {
    if (noticias_json[index]["categoria"] == categoria) {
      news_html += news_to_HTML(noticias_json[index]); // make div and put it on text
      amount++; // + 1 added news
    }
    index++; //next index of array
  }
  flag = false;
  map.set(categoria, index); // for no repetition news
  while (index < noticias_json.length && amount < 7) {
    if (noticias_json[index]["categoria"] == categoria) {
      flag = true; // if database has more news we make button
      amount++;
    }
    index++;
  }
  if (flag == true) {
    news_html += add_button();
  } // make button and put it on text
  document.querySelector("content").innerHTML += news_html; //put  text on html page
}

function news_to_HTML(news) {
  let answer =
    '<div class="imagencConCategory">\
					<img class="newsImg" src="' +
    news["urlImagen"] +
    '" alt="' +
    news["alt"] +
    '">\
					<div class="titulos">\
						<a href="index.html?id=' +
    news["newsID"] +
    '"> <div class="newsTitle">' +
    news["titulo"] +
    '</div></a>\
						<div class="newsSubtitle">' +
    news["subtitulo"] +
    "</div>\
				    </div>\
				 </div>";
  return answer;
}

function add_button() {
  let answer =
    '<div class="button">\
					<button  id="ver_mas"  onclick="on_button_clicked()">Ver mas</button>\
				</div>';
  return answer;
}

function display_choose(categoria) {
  let button = document.getElementById(categoria);
  button.style.backgroundColor = "rgb(188,188,188)";
}

function on_button_clicked() {
  categoria = GetParam(); //take name of category from window url
  document.getElementById("ver_mas").remove(); // button disappears
  display_data(categoria); //display 6 news and button (if out database has more news)
}

/* función para mostrar noticia con click desde la página de categoria */
function GetParamNot() {
  let url = window.location.href;
  console.log(url);
  let temp = url.split("=");
  console.log(temp);
  let answer = temp[1];
  console.log(answer);
  return answer;
}

function newsPage_to_html(news) {
  parrafoContenidoSeparado = news["contNoticia"].split("\\n");

  newsPage =
    '<section class="caja">\
					<div class="tittle">' +
    news["titulo"] +
    '</div>\
					<div class="subtit">' +
    news["subtitulo"] +
    '</div>\
					<div class="lineaUno"></div>\
					<div class="imagencont">\
						<img class="imagenContenido" src="' +
    news["urlImagen"] +
    '" alt="' +
    news["alt"] +
    '">\
					</div>\
					<div class="lineaDos"></div>\
					<div class="contenidoTotal">\
						<div class="fecha">' +
    news["fecha"] +
    '<div class = "autor">' +
    news["autor"] +
    '</div></div>\
						<div class="cont"><p>' +
    parrafoContenidoSeparado[0] +
    "</p><br/><p>" +
    parrafoContenidoSeparado[1] +
    "</p><br/><p>" +
    parrafoContenidoSeparado[2] +
    '</p></div>\
						<div class="fuente">\
							<a href="' +
    news["urlNoticia"] +
    ' target = "_blank"><div class="cont3">Origen</div></a>\
						</div>\
				</section>';

  return newsPage;
}

function displayNewsData(noticiasIdIndex) {
  let noticiaHtml = "";
  noticiaHtml += newsPage_to_html(noticias_json[noticiasIdIndex - 100]);
  document.querySelector("content").innerHTML = noticiaHtml;
}

function secondisplay() {
  //noticias_json.sort(function(a,b){return a.newsID - b.newsID});
  noticiasIdIndex = GetParamNot();
  displayNewsData(noticiasIdIndex);
  console.log("noticia" + noticiasIdIndex);
}
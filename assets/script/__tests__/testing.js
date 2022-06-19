/ categoria
//display
function click(categoria){


}
function doing(categoria){
    click(categoria)
    // let a ='index.html?id='+categoria;
    //let a1 = '?id='+categoria;
    window.location.search=a1;
    console.log(window.location.search);
    firt_display();
    console.log(document.querySelector("content").innerHTML);
    while(document.querySelector("content").innerHTML.includes('button id="ver_mas"') == true){
        console.log("true")
        var elems = document.getElementById("ver_mas");
        elems.click();
        console.log("click")
    }
}


function correct_amount_of_categoria(categoria){
    let amount=0;
    for (let i=0;i<noticias_json.length; i++){
        if (noticias_json[i]["categoria"] == categoria){
            amount++;
        }
        
    }
    return amount;
}

function word_amount(word, text){
    let amount =0;
    let position =0;
    let i =0;
    while (i == 0  ||  position > 0 ){
        position = text.indexOf(word, position);
        position++;
       // console.log(position)
        if (position > 0){amount++;}
        i++;
    }
    
    return amount;
}

function find_id(text, amount){
    let ids = [];
    let position =0;
    let i =0;
    while (ids.length < amount ){
        position = text.indexOf("id=", position);
        position+=3;
        let number = 0;
        while (isNaN(text[position]) == false){
            let n = parseInt(text[position]);
            number=number*10+n;
            position++;
        }
        position++;
        ids.push(number)
        i++;
    }
    return ids;
}

function check_ids(ids){
    for (let i=0;i<ids.length;i++){
        for(let j=0;j<ids.length;j++){
            if (i!=j && ids[i]==ids[j]){
                return false;
            }
        }
    }
    return true;
}

function check_ids1(ids){
    for (let i=0;i<ids.length;i++){
        if(noticias_json[i]["categoria"] != categoria){
            return false;
        }
    }
    return true;
}

function news_of_categoria(categoria){
    doing(categoria);
    categoria=GetParam();
    let correct_amount= correct_amount_of_categoria(categoria);
    let text =document.querySelector("content").innerHTML;
    let amount = word_amount("imagencConCategory", text);
    if (correct_amount != amount){return false;}
    ids=find_id(text,amount);
    if(!check_ids(ids)){return false;}
    if(!check_ids1(ids)){return false;}
    return true;
}
news_of_categoria("Deporte")
//module.exports = news_of_categoria;

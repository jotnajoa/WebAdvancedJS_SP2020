/*------------------------------------------------*/
// 	Handlebars Intro
//	http://handlebarsjs.com/
//	Learn more: http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/
/*------------------------------------------------*/


let data ={ 
    title:"my First post",
    description:"I love this Library"
}

let source=$('#myfirst-template').html()
let template = Handlebars.compile(source);
let results = template(data);

$('body').append(results);
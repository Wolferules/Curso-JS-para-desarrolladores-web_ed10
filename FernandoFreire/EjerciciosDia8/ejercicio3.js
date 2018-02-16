

var imagenes = document.querySelectorAll(".td-module-thumb img");

for(var i = 0; i < imagenes.length; i++){
	var url = document.querySelectorAll('.td-module-thumb img')[i].src;
	var alto = document.querySelectorAll('.td-module-thumb img')[i].height;
	var ancho = document.querySelectorAll('.td-module-thumb img')[i].width;
	var sustituto = "http://lorempixel.com/"+ancho+"/"+alto+"/cats";
	document.querySelectorAll('.td-module-thumb img')[i].src = sustituto;
}
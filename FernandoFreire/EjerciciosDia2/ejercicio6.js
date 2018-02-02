var precio = prompt("Dime el precio del producto");
var mes = prompt("En que mes estamos?");
var dia = prompt("Es fin de semana?");

var posicionMes = comprobarMes(mes);
var posicionDia = comprobarDia(dia);

if (posicionMes && posicionDia) {
	var descuento = precio * 0.25;
	var resultado = precio - descuento;
	console.log("Enhorabuena, tiene un descuento del " + descuento);
	console.log("Tiene que pagar " + resultado);
}
else {
	console.log("Lo lamentamos, tiene que pagar la totalidad. " + precio);
}

function comprobarMes(mes) {
	switch(mes) {
		case "diciembre":
			return true;
			break;
		case "enero":
			return true;
			break;
		case "febrero":
			return true;
			break;
		case "marzo":
			return true;
			break;
		default:
			return false;
			break;
	}
}

function comprobarDia(dia) {
	if(dia == "si") {
		return true;
	}
	else {
		return false;
	}
}


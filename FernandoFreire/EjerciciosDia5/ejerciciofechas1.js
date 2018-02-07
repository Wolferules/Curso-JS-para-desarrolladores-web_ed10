

var dia = prompt("Dime que dia quieres que te diga");
var mes = prompt("Dime el mes");
var anio = prompt("Por ultimo, el año");

var validacionDia = validarDia(dia);

if (validacionDia == true) {
	var validacionMes = validarMes(mes,dia);
}


function validarDia(dia) {
	if (dia > 27 && dia <= 31) {
		return true;
	} else {
		return false;
		console.log("El día esta mal escrito");
	}
}

function validarMes(mes,dia) {
	if (mes == 1 && dia == 28) {
		return true;
	} else if(mes == 3 || mes == 5 || mes == 8 || mes == 10 && dia == 30) {
		return true;
	} else if (mes == 0 || mes == 2 || mes == 4|| mes == 6 || mes == 7 || mes == 9 || mes == 11 && dia == 31) {
		return true;
	} else return false;
}

/*
var validacion = validacionFechas(dia,mes,anio);
if (validacion) {
	fechaCorta(dia,mes,anio);
	fechaLarga(dia,mes,anio);
}


function validacionFechas(dia,mes,anio) {
	var fecha = new Date(anio,mes,dia);
	if (fecha.getFullYear()) {
		if(fecha.getMonth()) {
			if (fecha.getDay()) {
				return true;
			} else {
				console.log("El dia esta mal escrito");
			}
		} else {
			console.log("El mes esta mal escrito");
		}
	} else {
		console.log("El año esta mal escrito");
	}
}
*/

function fechaCorta(dia,mes,anio) {
	var fecha = new Date(anio,mes,dia);
	fecha.toDateString();
	console.log(dia + "/" + mes + "/" + anio);
}

function fechaLarga(dia,mes,anio) {
	var fecha = new Date(anio,mes,dia);
	var opciones = {
		year:'numeric',
		month:'long',
		day:'numeric'
	};
	console.log(fecha.toLocaleString("es-ES", opciones));
}


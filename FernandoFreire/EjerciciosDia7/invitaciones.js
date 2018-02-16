
var listaIds = [];
invitaciones();

function invitaciones() {

	var dimeNombre = prompt("Dime tu nombre");
	var estaIncluidoEvento = prompt("Quiere darse de baja o de alta al evento");
	var variable_baja = false;
	var variable_alta = false;

	if (estaIncluidoEvento == "baja") {
		variable_baja = darDeBaja(dimeNombre);
		if (variable_baja) {
			console.log(dimeNombre + " ha sido dado de baja.");
		}
		else {console.log("No se ha encontrado el registro");}

	} else if (estaIncluidoEvento == "alta") {
		variable_alta = darDeAlta(dimeNombre);
		if (variable_alta) {
			console.log(dimeNombre + " ha sido dado de alta.");
		}
		else {console.log("No se ha encontrado el registro");}

	} else { console.log("El campo de baja es incorrecto");}

}
	function darDeBaja(nombre) {
		for(var i = 0; i < listaIds.length ; i++) {
			if (listaIds[i] == nombre) {
				listaIds[i] = null;
				variable_baja = true;
				return variable_baja;
			} 
		}
	}

	function darDeAlta(nombre) {
		console.log(nombre);
		for (var i = 0; i < listaIds.length; i++) {
				if(listaIds[i] == null) {
					listaIds[i]=nombre;
					variable_alta = true;
					return variable_alta;
				}	
			}
		listaIds.push(nombre);	
	}

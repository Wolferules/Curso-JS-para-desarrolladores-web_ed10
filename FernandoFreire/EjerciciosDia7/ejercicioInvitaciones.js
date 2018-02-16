var dimeNombre = prompt("Dime tu nombre");
var estaIncluidoEvento = prompt("Quiere darse de baja o de alta al evento");
var listaIds = [];

if (estaIncluidoEvento == "baja") {
	darDeBaja(dimeNombre);
} else if (estaIncluidoEvento == "alta") {
	darDeAlta(dimeNombre);
} else { console.log("El campo de baja es incorrecto");}


	function darDeBaja(nombre) {
		for(var i = 0; i <= listaIds.length ; i++) {
			if (listaIds[i] == dimeId) {
				listaIds[i] == undefined;
				console.log("Usted, con el nombre " + dimeNombre + " ha sido eliminado.");
				break;
			} else {
				alert("El nombre que me has dado no aparece entre los invitados");
				break;
			}
		}
	}

	function darDeAlta(nombre) {
		for (var i = 0; i <= listaIds.length; i++) {
				console.log(i);
				if(listaIds[i] == undefined) {
					console.log(i);
					listaIds.push(dimeNombre);
					console.log("Su nombre ha sido incluido en el evento");
					break;
				}	
			}	
	}








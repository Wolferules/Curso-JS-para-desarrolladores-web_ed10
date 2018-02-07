
lanzarMoneda();

function lanzarMoneda() {
	var numero = Math.floor(Math.random() * (2 - 0) + 0);
	console.log(numero);

	if (numero == 1) {
		console.log("El número es impar");
	}
	else {
		console.log("El número es par");
	}

}


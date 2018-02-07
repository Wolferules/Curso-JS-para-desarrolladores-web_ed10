
var total = llamadaDados();

console.log(total);

function llamadaDados() {
	var dado1;
	var dado2;

	var contador = 0;

	for (var i = 0; i < 10; i++) {

		dado1 = Math.floor(Math.random() * (7 - 1)) + 1;
		dado2 = Math.floor(Math.random() * (7 - 1)) + 1;
		var sumaDados = Number(dado1) + Number(dado2);

		if (sumaDados > 9) {
			contador++;
		}  
	}
	return contador;
}


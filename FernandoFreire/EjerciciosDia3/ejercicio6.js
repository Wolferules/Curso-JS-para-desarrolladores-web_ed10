var numeroUsuario = prompt("Dame un numero");
var sumaUsuario = Number(numeroUsuario) + 50;
var sumaTotalidadPares = 0;
var sumaNumerosImpares = 0;

for(i=numeroUsuario;i<=sumaUsuario;i++) {
	if(i % 2 == 0) {
		sumaTotalidadPares = sumaTotalidadPares + i;
	}
	else {
		sumaNumerosImpares++;
	}
}

console.log("La suma de los numeros pares es " + sumaTotalidadPares);
console.log("El numero de impares que hay es " + sumaNumerosImpares);
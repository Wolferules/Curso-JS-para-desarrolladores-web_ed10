var arrayOrigen = [];
var arrayPar = [];
var arrayImpar = [];

for (i = 0 ; i < 100 ; i++) {
	arrayOrigen[i] = Math.floor(Math.random() * (100 - 0) + 0);
	console.log(arrayOrigen[i]);
}

for (i = 0; i < 100 ; i++) {
	if (arrayOrigen[i] %2 == 0) {
		arrayPar.push(arrayOrigen[i]);
	} else {
		arrayImpar.push(arrayOrigen[i]);
	}
}

console.log(arrayPar);
console.log(arrayImpar);
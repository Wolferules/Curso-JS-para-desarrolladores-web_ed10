var frase = prompt("Introduce una frase");
var letra = prompt("Introduce una letra");

var contadorPalabras = 0;

for(var i = 0; i <= frase.length; i++) {
	if (frase[i] == letra) {
		contadorPalabras++;
	}
}

if (contadorPalabras > 0 ) {
	console.log("La frase tiene " + contadorPalabras + " letras");
} else {
	console.log("La frase no tiene esa letra");
}


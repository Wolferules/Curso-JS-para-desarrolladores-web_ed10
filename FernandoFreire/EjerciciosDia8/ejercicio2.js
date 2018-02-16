
var lista = document.querySelectorAll(".bloquet .circulacion a");

for (var i = 0; i < lista.length; i++) {
	if (lista[i]) {
		console.log(lista[i].innerText);
	}
}


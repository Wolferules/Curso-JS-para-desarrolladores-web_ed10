var array1 = ["Oscar","Kike","Alvaro","Andres"];
var array2 = [9897667,2312332,2312312,4342343];
var array3 = [false,true,true,false,true];
var array_maximo_campos;

var numero_campos1 = Math.max(array1.length);
var numero_campos2 = Math.max(array2.length);
var numero_campos3 = Math.max(array3.length);

if (numero_campos1 > numero_campos2) {
	if (numero_campos1 > numero_campos3) {
		array_maximo_campos = numero_campos1;
	} else {
		array_maximo_campos = numero_campos3;
	}
} else {
	if(numero_campos2 > numero_campos3) {
		array_maximo_campos = numero_campos2;
	} else {
		array_maximo_campos = numero_campos3;
	}
}

var todos = [];

for (i = 0 ; i < array_maximo_campos ; i++) {
	var nuevoArray = [array1[i],array2[i],array3[i]];
	todos.push(nuevoArray);
}

console.log("Maximo campos " + array_maximo_campos);


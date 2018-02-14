var array1 = ["Oscar","Susana","Mario","Kike"];
var array2 = [9897667,2312332,2312312,4342343];
var array3 = [false,true,true,false];

var todos = [];

for (i = 0 ; i < array1.length ; i++) {
	var nuevoArray = [array1[i],array2[i],array3[i]];
	todos.push(nuevoArray);
}

console.log(todos);


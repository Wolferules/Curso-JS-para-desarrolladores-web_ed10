var fechaComienzoCurso = new Date("2018","0","24");
var fechaHoy = new Date();
fechaHoy.getDate();

console.log("El curso comenzo el " + fechaComienzoCurso);
console.log("El dia de hoy es " + fechaHoy);

var numeroDias = fechaHoy - fechaComienzoCurso;
var numeroDias = numeroDias /1000;
var numeroDias = numeroDias/60;
var numeroDias = numeroDias/60;
console.log("El numero de horas que han pasado son " + numeroDias);
var numeroDias = numeroDias/24;
console.log("El numero de dias que han pasado son " + numeroDias);

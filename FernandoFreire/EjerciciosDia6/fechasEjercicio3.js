var fechaHoy = new Date();
fechaHoy.getDate();

var fechaTerminoCurso = new Date("2018","1","26");
var totalAcabarCurso = fechaTerminoCurso - fechaHoy;

console.log("El numero de milisegundos que quedan son " + totalAcabarCurso);
totalAcabarCurso = ((totalAcabarCurso/1000) /60)/60;
console.log("El numero de horas que quedan para acabar el curso son " + totalAcabarCurso);
totalAcabarCurso = totalAcabarCurso/24;
console.log("El numero de dias que quedan para acabar el curso son " + totalAcabarCurso);


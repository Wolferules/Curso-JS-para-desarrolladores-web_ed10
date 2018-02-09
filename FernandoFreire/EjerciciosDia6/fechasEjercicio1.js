var fechaActual = new Date();
fechaActual.getDate();
console.log("La fecha de hoy es " + fechaActual);
fechaActual.setDate(fechaActual.getDate() + 30);
console.log("La fecha dentro de 30 días será " + fechaActual);
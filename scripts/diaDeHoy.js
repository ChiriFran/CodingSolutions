function ActualizarDiaSemana() {
  // Crear una instancia de Date
  var fecha = new Date();

  // Obtener el día de la semana como un número (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
  var diaNumero = fecha.getDay();

  // Crear un array con los nombres de los días de la semana
  var diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  // Obtener el nombre del día de la semana utilizando el número obtenido anteriormente
  var diaNombre = diasSemana[diaNumero];

  var diaSemanaNav = document.getElementById("diaSemanaNav");
  var diaSemanaContacto = document.getElementById("diaSemanaContacto");
  var diaSemanaContactoDiv8 = document.getElementById("diaSemanaContactoDiv8");

  diaSemanaNav.innerText = diaNombre;
  diaSemanaContactoDiv8.innerText = diaNombre;
  diaSemanaContacto.innerText = diaNombre;

}

ActualizarDiaSemana();

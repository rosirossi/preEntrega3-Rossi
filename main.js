alert("Bienvenidxs a Mutto Detail");

let consulta=confirm("¿Desea sacar un turno?");

if (consulta==true){

  let vehiculo = obtenerDatosVehiculo();
  let fecha = obtenerFechaPreferencia();

  let turnoDisponible = verificarDisponibilidad(fecha);

  if (turnoDisponible) {
    let confirmarTurno = confirmarTurno();
    if (confirmarTurno) {
      alert("¡Lxs esperamos!");
    }
  } else {
    alert("No tenemos disponibilidad para esa fecha");
  }
}

function obtenerDatosVehiculo() {
  return prompt("Indicar tipo de vehículo, modelo y año.");
}

function obtenerFechaPreferencia() {
  return prompt("¿Qué día de la semana preferís?");
}

function verificarDisponibilidad(fecha) {
  switch(fecha){
    case "lunes":
      alert("Tenemos disponibilidad a las 14h");
      return true;

    case "martes":
      alert("Tenemos disponibilidad a las 16h");
      return true;

    case "jueves":
      alert("Tenemos disponibilidad a las 9h");
      return true;

    default:
      return false;
  }
}

function confirmarTurno() {
  return confirm("¿Desea confirmar el turno?");
}



//Función constructora, sería para tener un registro de los clientes, no sé si es correcto hacerlo así. Yo quisiera que a medida que se vyan logueando quede un registro de quién compra. 

function Cliente(id, nombre, apellido, servicio, tipoVehiculo, calificacion) {
    this.id=  id
    this.nombre= nombre
    this.apellido= apellido
    this.servicio= servicio
    this.tipoVehiculo= tipoVehiculo
    this.calificacion= calificacion
}



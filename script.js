// Declarar una matriz (array) para almacenar las notas
const notas = [];

// Función para agregar una nota
function agregarNota() {
  const nuevaNota = prompt("Ingrese una nueva nota:");
  
  // Verificar si el usuario ingresó algo antes de agregar la nota
  if (nuevaNota !== null && nuevaNota.trim() !== "") {
    notas.push(nuevaNota);
    alert("Nota agregada con éxito.");
  } else {
    alert("Debe ingresar una nota válida.");
  }
}

// Función para mostrar todas las notas
function mostrarNotas() {
  if (notas.length === 0) {
    alert("No hay notas para mostrar.");
  } else {
    alert("Notas:\n" + notas.join("\n"));
  }
}

// Función principal para el sistema de notas
function sistemaDeNotas() {
  while (true) {
    const opcion = prompt("Seleccione una opción:\n1. Agregar nota\n2. Mostrar notas\n3. Salir");

    switch (opcion) {
      case "1":
        agregarNota();
        break;
      case "2":
        mostrarNotas();
        break;
      case "3":
        alert("Saliendo del sistema de notas.");
        return; // Salir de la función principal
      default:
        alert("Opción no válida. Por favor, elija una opción válida.");
        break;
    }
  }
}

// Iniciar el sistema de notas
sistemaDeNotas();

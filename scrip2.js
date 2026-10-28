let alumnos = [];

function cargarAlumnos() {
  alumnos = [
    "Juan", "Pedro", "Maria", "Ana", "Luis",
    "Carlos", "Sofia", "Jorge", "Lucia", "Diego"
  ];

  let lista = document.getElementById("listaInicial");
  lista.innerHTML = "";

  alumnos.forEach(function(alumno, i) {
    lista.innerHTML += "<li>" + i + " - " + alumno + "</li>";
  });
}

function eliminar() {
  let nombre = document.getElementById("nombreEliminar").value;
  let index = alumnos.indexOf(nombre);

  if (index !== -1) {
    alumnos.splice(index, 1);
  } else {
    alert("No se encontró el alumno");
  }

  let lista = document.getElementById("listaFinal");
  lista.innerHTML = "";

  alumnos.forEach(function(alumno, i) {
    lista.innerHTML += "<li>" + i + " - " + alumno + "</li>";
  });
}
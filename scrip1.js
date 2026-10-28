function calcular() {
  let datos = [
    Number(document.getElementById("d0").value),
    Number(document.getElementById("d1").value),
    Number(document.getElementById("d2").value),
    Number(document.getElementById("d3").value),
    Number(document.getElementById("d4").value),
    Number(document.getElementById("d5").value),
    Number(document.getElementById("d6").value)
  ];

  let suma = 0;
  let max = datos[0];
  let min = datos[0];

  for (let i in datos) {
    let valor = datos[i];
    suma += valor;
    if (valor > max) max = valor;
    if (valor < min) min = valor;
  }

  let promedio = suma / datos.length;

  document.getElementById("promedio").textContent = "Promedio: " + promedio.toFixed(2);
  document.getElementById("maximo").textContent = "Máximo: " + max;
  document.getElementById("minimo").textContent = "Mínimo: " + min;
}
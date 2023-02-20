// TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
// Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
// Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
// Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).

const $integrantesFamiliaInput = document.querySelector("#integrantes-familia");
const $containerIntegrantes = document.querySelector("#integrantes-container");
const $botonAgregarIntegrantes = document.querySelector("#agregar");
const $botonCalcular = document.querySelector("#calcular");
const $botonReiniciar = document.querySelector("#reiniciar");

function crearInputs(cantidadIntegrantes) {
  cantidadIntegrantes = $integrantesFamiliaInput.value;

  for (let i = 1; i <= cantidadIntegrantes; i++) {
    let nuevoInput;
    let nuevoLabel;

    nuevoLabel = document.createElement("label");
    nuevoLabel.textContent = `Edad integrante #${i}:`;
    nuevoInput = document.createElement("input");
    nuevoInput.className = "edad";
    $containerIntegrantes.appendChild(nuevoLabel);
    $containerIntegrantes.appendChild(nuevoInput);
  }
}

function calcularNumeroMaximo(edadesArray) {
  const $maximaEdadTexto = document.querySelector("#maxima-edad");
  let mayorEdad = edadesArray[0];

  for (let i = 0; i < edadesArray.length; i++) {
    if (edadesArray[i] > mayorEdad) {
      mayorEdad = edadesArray[i];
    }
  }

  $maximaEdadTexto.textContent = mayorEdad;

  return mayorEdad
}

function calcularNumeroMinimo(edadesArray) {
  const $minimaEdadTexto = document.querySelector("#minima-edad");
  let menorEdad = edadesArray[0];

  for (let i = 0; i < edadesArray.length; i++) {
    if (edadesArray[i] < menorEdad) {
      menorEdad = edadesArray[i];
    }
  }

  $minimaEdadTexto.textContent = menorEdad;

  return menorEdad
}

function calcularPromedio(edadesArray) {
  const $promedioEdadTexto = document.querySelector("#promedio-edad");
  let sumaEdades = 0;

  for (let i = 0; i < edadesArray.length; i++) {
    sumaEdades += edadesArray[i];
  }

  let promedioEdades = sumaEdades / edadesArray.length;
  $promedioEdadTexto.textContent = parseInt(promedioEdades);

  return promedioEdades
}

function validarCantidadIntegrantes(cantidadIntegrantes) {
  if (cantidadIntegrantes.length === 0) {
    return "Este campo no puede estar vacío";
  } else if (!/^[0-9]+$/.test(cantidadIntegrantes)) {
    return "Este campo solo recibe números";
  } else {
    return "";
  }
}

function validarEdades(edad) {
  if(edad.length === 0) {
    return "Este campo no puede estar vacío";
  } else if (!/^[0-9][0-9]$/.test(edad)) {
    return "Este campo solo recibe números hasta 99"
  } else {
    return ""
  }
}

function manejarValidacionesIntegrantes() {
  const cantidadIntegrantes = $integrantesFamiliaInput.value;
  const $erroresTexto = document.querySelector("#errores");
  const errorCantidadIntegrantes = validarCantidadIntegrantes(cantidadIntegrantes);

  if (errorCantidadIntegrantes) {
    $integrantesFamiliaInput.className = "error";

    const errorTexto = document.createElement("li");
    errorTexto.textContent = errorCantidadIntegrantes;
    $erroresTexto.appendChild(errorTexto);
  } else {
    $integrantesFamiliaInput.className = "";
  }
}

function manejarValidacionesEdades() {
  const $edadesInput = document.querySelector(".edad");
  const edad = $edadesInput.value;
  const errorEdades = validarEdades(edad);
  const $erroresTexto = document.querySelector("#errores");

  if (errorEdades) {
    $edadesInput.className = "error";

    const errorTexto = document.createElement("li");
    errorTexto.textContent = errorEdades;
    $erroresTexto.appendChild(errorTexto);
  } else {
    $edadesInput.className = "";
  }
}

$botonAgregarIntegrantes.onclick = function (event) {
  crearInputs();
  manejarValidacionesIntegrantes();

  event.preventDefault();
};

$botonCalcular.onclick = function (event) {
  let edadesArray = [];
  let edadesInput = $containerIntegrantes.querySelectorAll("input");

  for (let i = 0; i < edadesInput.length; i++) {
    edadesArray.push(Number(edadesInput[i].value));
  }

  calcularNumeroMaximo(edadesArray);

  calcularNumeroMinimo(edadesArray);

  calcularPromedio(edadesArray);

  manejarValidacionesEdades();

  event.preventDefault();
};

$botonReiniciar.onclick = function () {
  location.reload;
};

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
    nuevoLabel.classList.add("d-block");
    nuevoLabel.classList.add("col-form-label");
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


$botonAgregarIntegrantes.onclick = function (event) {
  document.querySelector(".calculos-container").className = "d-block";
  crearInputs();

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

  event.preventDefault();
};

$botonReiniciar.onclick = function () {
  location.reload;
};

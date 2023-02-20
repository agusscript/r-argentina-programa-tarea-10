// TAREA:
// Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
// Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
// Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).

const $numeroIntegrantesinput = document.querySelector("#integrantes-trabajo");
const $botonAgregar = document.querySelector("#agregar");
const $salariosContainer = document.querySelector("#salarios");
const $botonCalcular = document.querySelector("#calcular");
const $botonReiniciar = document.querySelector("#reiniciar");

function crearIntegrante() {
  let cantidadIntegrantes = $numeroIntegrantesinput.value;

  for (let i = 1; i <= cantidadIntegrantes; i++) {
    let nuevoIntegranteLabel = document.createElement("label");
    nuevoIntegranteLabel.textContent = "Salario anual integrante #" + i;
    let nuevoIntegranteInput = document.createElement("input");
    nuevoIntegranteInput.classList.add("salario");
    $salariosContainer.appendChild(nuevoIntegranteLabel);
    $salariosContainer.appendChild(nuevoIntegranteInput);
  }
}

function validarInput(cantidadIntegrantes) {
  if (cantidadIntegrantes.length === 0) {
    return "Este campo no puede estar vacío";
  } else if (!/^[0-9]+$/.test(cantidadIntegrantes)) {
    return "Este campo solo recibe números";
  } else {
    return "";
  }
}

function manejarValidacionIntegrantes() {
  const cantidadIntegrantes = $numeroIntegrantesinput.value;
  const $erroresTexto = document.querySelector("#errores");
  const errorCantidadIntegrantes = validarInput(cantidadIntegrantes);

  if (errorCantidadIntegrantes) {
    $numeroIntegrantesinput.className = "error";

    const errorTexto = document.createElement("li");
    errorTexto.textContent = errorCantidadIntegrantes;
    $erroresTexto.appendChild(errorTexto);
  } else {
    $numeroIntegrantesinput.className = "";
  }
}

function manejarValidacionSalarios() {
  const $salariosInput = document.querySelector(".salario");
  const salarios = $salariosInput.value;
  const $erroresTexto = document.querySelector("#errores");
  const errorSalarios = validarInput(salarios);

  if (errorSalarios) {
    $salariosInput.classList.add("error");

    const errorTexto = document.createElement("li");
    errorTexto.textContent = errorSalarios;
    $erroresTexto.appendChild(errorTexto);
  } else {
    $salariosInput.className = "";
  }
}

function calcularResultadoSalarios() {
  const salariosInputs = document.querySelectorAll(".salario");
  let salariosArray = [];

  for (let i = 0; i < salariosInputs.length; i++) {
    salariosArray.push(Number(salariosInputs[i].value));
  }

  let salarioMaximo = salariosArray[0];
  for (let i = 0; i < salariosArray.length; i++) {
    if (salariosArray[i] > salarioMaximo) {
      salarioMaximo = salariosArray[i];
    }
  }
  const $mayorSalarioAnualTexto = document.querySelector("#mayor-salario-anual");
  $mayorSalarioAnualTexto.textContent = salarioMaximo;

  let salarioMinimo = salariosArray[0];
  for (let i = 0; i < salariosArray.length; i++) {
    if (salariosArray[i] < salarioMinimo) {
      salarioMinimo = salariosArray[i];
    }
  }
  const $menorSalarioAnualTexto = document.querySelector("#menor-salario-anual");
  $menorSalarioAnualTexto.textContent = salarioMinimo;

  let salariosArraySuma = 0;
  for (let i = 0; i < salariosArray.length; i++) {
    salariosArraySuma += salariosArray[i];
  }
  let promedioSalarioAnual = salariosArraySuma / salariosArray.length;

  const $promedioSalarioAnualTexto = document.querySelector("#promedio-salario-anual");
  $promedioSalarioAnualTexto.textContent = parseInt(promedioSalarioAnual);

  const $promedioSalarioMensualTexto = document.querySelector("#promedio-salario-mensual");
  $promedioSalarioMensualTexto.textContent = parseInt(
    promedioSalarioAnual / 12
  );
}

$botonAgregar.onclick = function () {
  crearIntegrante();
  manejarValidacionIntegrantes();

  return false;
};

$botonCalcular.onclick = function () {
  calcularResultadoSalarios();
  manejarValidacionSalarios();

  return false;
};

$botonReiniciar.onclick = function () {
  location.reload;
};

function probarValidarCantidadIntegrantes() {
  console.assert(
    validarCantidadIntegrantes("") === "Este campo no puede estar vacío",
    "La función validarCantidadIntegrantes no validó que el campo no este vacío"
  );

  console.assert(
    validarCantidadIntegrantes("as.,") === "Este campo solo recibe números",
    "La función validarCantidadIntegrantes no validó que el campo solo tenga números"
  );
}

function probarValidarEdades() {
    console.assert(
        validarEdades("") === "Este campo no puede estar vacío",
        "La función validarEdades no validó que el campo no este vacío"
    );

    console.assert(
        validarEdades("123") === "Este campo solo recibe números hasta 99",
        "La función validarEdades no validó que el campo solo acepte números hasta 99"
    );
}

probarValidarCantidadIntegrantes();
probarValidarEdades();
function probarValidarInput() {
    console.assert(
        validarInput("") === "Este campo no puede estar vacío",
        "La función validarInput no validó que el campo no esté vacío"
    );

    console.assert(
        validarInput("as,.") === "Este campo solo recibe números",
        "La función validarInput no validó que el campo solo acepte números"
    );
}

probarValidarInput();
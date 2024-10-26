// DECLARANDO CONSTANTES
const prompt = require('prompt-sync')();

// Inicializar variable opcion fuera del ciclo
let opcion;

// Utilizando un DO-WHILE
do {
    console.log("\n\nMenu opciones");
    console.log("1. Programa que realiza el cálculo del salario");
    console.log("2. Programa que realiza la búsqueda de un libro");
    console.log("3. Salir\n");

    opcion = prompt("Ingrese una opcion: ");
    opcion = parseInt(opcion);

    switch (opcion) {
        case 1:
            console.log("Programa que realiza el cálculo del salario final");
            let vSalario = prompt("Ingrese su salario: ");
            vSalario = parseFloat(vSalario);

            let Ingresos = [
                { Salario: vSalario },
                { HorasExtras: 25 },
                { Isss: 13.50 },
                { Afp: 29 }
            ];

            let SalarioPago = (Ingresos[0].Salario + Ingresos[1].HorasExtras) - (Ingresos[2].Isss + Ingresos[3].Afp);
            console.log("Total a pagar es: " + SalarioPago);

            if (SalarioPago > 365.00 && SalarioPago < 500) {
                console.log("Tu salario neto es mayor al salario mínimo.");
            } else if (Ingresos[0].Salario > 500) {
                console.log("Eres un agente de retención de renta.");
            } else {
                console.log("Tu salario es menor al mínimo y no se retiene ISR.");
            }
            break;

        case 2:
            console.log("\nPrograma que selecciona el libro buscado\n");
            let Biblioteca = [
                { libro: "Risitos de Oro", genero: "Cuentos" },
                { libro: "Harry Potter y la piedra filosofal", genero: "Magico" },
                { libro: "Comer, amar y rezar", genero: "Romance" },
                { libro: "Cura Mortal", genero: "Ficcion" }
            ];

            console.log("Búsqueda de libro por género\n");
            let generoBuscado = prompt("Ingrese el género del libro a buscar: ");
            const libroEncontrado = Biblioteca.find(libro => libro.genero.toLowerCase() === generoBuscado.toLowerCase());

            if (libroEncontrado) {
                console.log("\nEl libro encontrado es: " + libroEncontrado.libro);
            } else {
                console.log("Género no encontrado, ingrese uno válido.");
            }
            break;

        case 3:
            console.log("Saliendo del programa...");
            break;

        default:
            console.log("Ingrese una opción correcta.");
            break;
    }
} while (opcion !== 3);

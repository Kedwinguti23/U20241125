console.log("Menú de opciones");
console.log("1. Programa que realiza el cálculo del salario");
console.log("2. Programa que realiza la búsqueda de un libro\n");

let opcion = 1;  // Elegí la opción 1, sin embabargo he probado ambas.

switch (opcion) {
    case 1:
        console.log("Programa que realiza el cálculo del salario final");

        // Aquí definí el arreglo de ingresos con valores claros y descriptivos
        let ingresos = {
            salario: 450,
            horasExtras: 25,
            isss: 13.50,
            afp: 29
        };

        // este apartado realiza el cálculo del salario neto
        let salarioPago = (ingresos.salario + ingresos.horasExtras) - (ingresos.isss + ingresos.afp);

        // Mostramos el resultado del salario neto
        console.log("Total a pagar es: $" + salarioPago.toFixed(2));

        // Decisiones con base en el salario
        if (salarioPago > 365) {
            console.log("Tu salario neto es mayor al salario mínimo.");
        } else {
            console.log("Tu salario es menor al salario mínimo.");
        }

        break;

    case 2:
        console.log("Programa que selecciona el libro buscado\n");

        // Había que organizar la biblioteca con un arreglo de objetos
        let biblioteca = [
            { libro: "Risitos de Oro", genero: "Cuentos" },
            { libro: "Harry Potter y la piedra filosofal", genero: "Mágico" },
            { libro: "Comer, amar, rezar", genero: "Romance" },
            { libro: "Cura Mortal", genero: "Ficción" }
        ];

        // Aquí elegimos el género deseado
        let generoBuscado = "Ficción";

        // esta sección se encarga de realizar la búsqueda del libro por género
        let libroEncontrado = biblioteca.find(libro => libro.genero === generoBuscado);

        // Por último el resultado de la búsqueda
        if (libroEncontrado) {
            console.log("El libro encontrado es: " + libroEncontrado.libro);
        } else {
            console.log("No se encontró un libro con el género: " + generoBuscado);
        }

        break;

    default:
        console.log("Ingrese una opción correcta");
        break;
}

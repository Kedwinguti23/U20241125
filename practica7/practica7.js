// Menu de opciones
console.log("1. Mostrar el número mayor de un arreglo o de lista");
console.log("2. Imprimir el total de vocales y mostrar cuáles son de una cadena\n");

let opcion = 1;

switch (opcion) {
    case 1:
        console.log("Ha ingresado a la opción 1\n");
        let number = [5, 3, 10, 25, 26, 85];
        numeroMayorArray(number);
        break;
    case 2:
        console.log("Ha ingresado a la opción 2\n");
        let texto = "texto de ejemplo";
        let resultado = contarVocales(texto);
        console.log("Total de vocales en la palabra '" + texto + "' es: " + resultado.CantidadVocales);
        console.log("Vocales encontradas sin repetir en '" + texto + "' son: " + resultado.Vocales);
        break;
    default:
        console.log("Elija una opción correcta entre 1 - 2");
        break;
}

// Función para encontrar el número mayor en un arreglo
function numeroMayorArray(numeros) {
    let maximo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    console.log("El número máximo del arreglo es: " + maximo);
}

// Función para contar vocales en una cadena
function contarVocales(cadena) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    let vocalesEncontradas = [];

    for (let letra of cadena.toLowerCase()) {
        if (vocales.includes(letra)) {
            contador++;
            vocalesEncontradas.push(letra);
        }
    }

    let vocalesUnicas = [...new Set(vocalesEncontradas)];

    return {
        CantidadVocales: contador,
        Vocales: vocalesUnicas
    };
}

// Función para convertir a mayúsculas
function ConvertirMayuscula(cadena) {
    // Validar si es un arreglo para poder iterarlo
    if (Array.isArray(cadena)) {
        return cadena.map(item => item.toUpperCase());
    } else if (typeof cadena === 'string') {
        // Si es una cadena, aplicamos la función de mayúscula
        return cadena.toUpperCase();
    } else {
        return "Error: el dato ingresado debe ser un string o un array de tipo string";
    }
}

// Función para convertir a minúsculas
function ConvertirMinuscula(texto) {
    if (Array.isArray(texto)) {
        return texto.map(item => item.toLowerCase());
    } else if (typeof texto === 'string') {
        return texto.toLowerCase();
    } else {
        return "Error: El dato ingresado debe ser un string o un array de tipo string";
    }
}

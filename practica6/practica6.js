console.log("Menu de opciones\n");
console.log("1. Encontrar el número mayor de un arreglo o de lista");
console.log("2. Contar el total de vocales y mostrar cuáles son de una cadena\n");

let opcion = 2;
switch (opcion) {
    case 1:
        console.log("\nOpción 1 elegida\n");
        let numeros = [3, 5, 10, 25, 8, 15];
        numeroMayor(numeros);
        break;
    case 2:
        console.log("\nOpción 2 elegida\n");
        let texto = "texto de ejemplo";
        let resultado = contarVocales(texto);
        console.log("Total de vocales en la palabra '" + texto + "' es: " + resultado.CantidadVocales);
        console.log("Vocales encontradas sin repetir en '" + texto + "' son: " + resultado.Vocales);
        break;
    default:
        console.log("\nElija una opción correcta entre 1 o 2");
        break;
}

// Función para encontrar el número mayor de un arreglo
function numeroMayor(numeros) {
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

console.log("Menu opciones");
console.log("1. Mediante un for, encontrar el mayor de una lista");
console.log("2. Mediante un while, imprimir los impares del 1-20");
console.log("3. Mediante un do-while detener el programa cuando lleguemos a un número random x");

let opcion = 1;

switch (opcion) {
    case 1:
        console.log("Has ingresado a la opción 1\n");
        let numeros = [36, 52, 24, 100, 78, 69];
        let maximo = numeros[0];

        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] > maximo) {
                maximo = numeros[i];
            }
        }

        console.log(`El número máximo es ${maximo}`);
        break;

    case 2:
        console.log("Has ingresado a la opción 2\n");

        let numero = 1;

        console.log("Impresión de números impares del 1-20 \n");
        while (numero <= 20) {
            if (numero % 2 != 0) {
                console.log(numero);
            }
            numero++;
        }
        break;

    case 3:
        console.log("Has ingresado a la opción 3\n");

        let NumeroRandom;

        do {
            NumeroRandom = Math.floor(Math.random() * 15);
            console.log("Número generado :", NumeroRandom);
        } while (NumeroRandom != 7);

        break;

    default:
        console.log("Debe ingresar una opción correcta 1 - 3");
        break;
}

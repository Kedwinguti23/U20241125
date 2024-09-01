console.log("Menu opciones");
console.log("1.Propiedades basicas de arrays");
console.log("2.Metodos avanzados de arrays");
console.log("3.Combinacion de arrays\n");

let opcion = 3;

switch (opcion) {
    case 1:
        console.log("Has ingresado a la opcion 1\n");

        //crear un array
        let numero = [10, 20, 30, 40, 50, 60];

        //Obtener longitud del array
        console.log("Longitud del arreglo ", numero.length, "\n"); //6

        //Agregar elemento al final
        numero.push(70);
        console.log("Arreglo despues de push ", numero, "\n"); // [10, 20, 30, 40, 50, 60, 70]

        //Eliminar ultimo elemento del arreglo
        let ultimoelemento = numero.pop();
        console.log("Arreglo despues de pop ", numero, "\n"); // [10, 20, 30, 40, 50, 60]

        break;

    case 2:
        console.log("Has ingresado a la opcion 2\n");

        //Crear arreglo
        let numeros = [1, 2, 3, 4, 5];

        //Map vamos realizar la multiplicacion por 3 de cada elemento
        let multiplicacionArray = numeros.map(num => num * 3);
        console.log("Multiplicacion * 3 del arreglo ", multiplicacionArray, "\n"); //[3, 6, 9, 12, 15]

        //Filter mostrar los numeros mayores a 2
        let numerosFiltrados = numeros.filter(num => num > 2);
        console.log("Numeros mayores a 2 : ", numerosFiltrados, "\n"); // [3, 4, 5]

        break;

    case 3:
        console.log("Has ingresado a la opcion 3");

        // Crear dos arrays
        let letras = ["c", "a", "b", "e", "d"];
        let numerosIniciales = [3, 1, 2, 5, 4];

        //Orden alfabetico y numerico
        letras.sort();
        numerosIniciales.sort((a, b) => a - b); // Orden numérico ascendente
        console.log("Letras ordenadas:", letras); // ["a", "b", "c", "d", "e"]
        console.log("Números ordenados:", numerosIniciales, "\n"); // [1, 2, 3, 4, 5]

        //Combinar arrays
        let combinados = letras.concat(numerosIniciales);
        console.log("Arrays combinados :", combinados, "\n");

        //Mostrar invertido el arreglo combinado
        combinados.reverse();
        console.log("Arrays combinado inverso :", combinados);

        break;

    default:
        console.log("Debe ingresar un opcion correcta 1 - 3");
        break;
}

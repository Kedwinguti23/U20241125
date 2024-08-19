console.log("Menu opciones");
console.log("1. Resultado de nota");

let opcion = 1;

switch (opcion) {
  case 1:
    console.log("Has ingresado a la opción 1");
    let nota = 8.85;
    if (nota >= 6.0 && nota <= 10.0) {
        console.log("Felicidades, estás aprobado con " + nota);
    } else {
        console.log("Lo siento, estás reprobado con " + nota);
    }
    break;

  case 2:
    let numero1 = 10;
    let numero2 = 20;

    if (numero1 > numero2) {
        console.log("El número mayor es " + numero1);
    } else {
        console.log("El número mayor es " + numero2);
    }
    break;

  default:
    console.log("Debe ingresar una opción correcta 1 - 2");
    break;
}

// Función para calcular el salario
function calculoSalario(horasTrabajadas, precioHora) {
    // Cálculo del salario total
    let salarioTotal = horasTrabajadas * precioHora;
    // Retornar el salario total
    return salarioTotal;
}

// Parámetros de entrada
let argumentoHoras = 45;
let argumentoPrecioHora = 15;

// Imprimir el salario total en consola
console.log("El salario total es: " + calculoSalario(argumentoHoras, argumentoPrecioHora));

// Función para calcular el descuento
function calculoDescuento(cantidad, descuento) {
    // Dividir el descuento entre 100 para obtener el valor decimal
    descuento = descuento / 100;
    // Calcular el monto con descuento
    let descuentoTotal = cantidad * descuento;
    // Retornar el valor con descuento
    return descuentoTotal;
}

// Parámetros de entrada
let cantidad = 100;
let porcentajeDescuento = 10;

// Imprimir el descuento total en consola
console.log("El descuento total es: " + calculoDescuento(cantidad, porcentajeDescuento));

// Ejercicio 3: Función para sumar dos números
function suma(num1, num2) {
    return num1 + num2;
}

// Ejercicio 3: Función para restar dos números
function resta(num1, num2) {
    return num1 - num2;
}

// Ejercicio 3: Función para multiplicar dos números
function multiplicacion(num1, num2) {
    return num1 * num2;
}

// Ejercicio 3: Función para dividir dos números
function division(num1, num2) {
    
    if (num2 === 0) {
        return "No se puede dividir por 0";
    }
    return num1 / num2;
}

let numero1 = 20;
let numero2 = 4;

// Imprimir los resultados de las operaciones en consola
console.log("Suma: " + suma(numero1, numero2));               // Resultado: 24
console.log("Resta: " + resta(numero1, numero2));             // Resultado: 16
console.log("Multiplicación: " + multiplicacion(numero1, numero2));  // Resultado: 80
console.log("División: " + division(numero1, numero2));       // Resultado: 5

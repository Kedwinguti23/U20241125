console.log("Función para conversión de formatos de fecha");

ConversorFecha('2024-10-12');

function ConversorFecha(fecha) {
    // CONVERTIR EL PARAMETRO A TIPO DATE
    const FechaFormato = new Date(fecha);

    // VALIDAR SI LA FECHA ES VALIDA
    if (isNaN(FechaFormato)) {
        console.log("Fecha no es válida");
        return;
    }

    // Imprimir los diversos formatos
    console.log("Fecha sin modificar = " + fecha); // Fecha original
    console.log("Fecha con formato toString = " + FechaFormato.toString()); // Formato estándar
    console.log("Fecha en formato local = " + FechaFormato.toLocaleString()); // Formato de fecha local
    console.log("Fecha solo con datos = " + FechaFormato.toDateString()); // Formato solo de fecha
    console.log("Solamente la hora = " + FechaFormato.toTimeString()); // Formato de la hora
}

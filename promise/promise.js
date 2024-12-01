// Función para simular la descarga de un archivo
function descargarArchivo(nombreArchivo) {
    return new Promise((resolve, reject) => {
        console.log(`Iniciando la descarga de ${nombreArchivo}...`);
        const tiempoDescarga = Math.floor(Math.random() * 3000) + 1000; // Entre 1 y 4 segundos
        setTimeout(() => {
            if (Math.random() > 0.1) { // 90% de probabilidad de éxito
                resolve(`✅ Descarga completa: ${nombreArchivo}`);
            } else {
                reject(`❌ Error al descargar: ${nombreArchivo}`);
            }
        }, tiempoDescarga);
    });
}

// Función asincrónica para gestionar la descarga de múltiples archivos
async function gestionarDescargas(archivos) {
    try {
        console.log("Comenzando la descarga de archivos...");
        for (const archivo of archivos) {
            const resultado = await descargarArchivo(archivo); // Espera a que cada archivo se descargue
            console.log(resultado);
        }
        console.log("Todas las descargas completadas.");
    } catch (error) {
        console.error("Ocurrió un problema:", error);
    }
}

// Lista de archivos a descargar
const listaDeArchivos = ["foto1.jpg", "documento.pdf", "video.mp4", "presentacion.pptx"];

// Iniciar el proceso de descargas
gestionarDescargas(listaDeArchivos);

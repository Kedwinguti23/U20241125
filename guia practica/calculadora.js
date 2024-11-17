function obtenerValores() {
  const numero1 = parseFloat(document.getElementById('numero1').value);
  const numero2 = parseFloat(document.getElementById('numero2').value);
  return { numero1, numero2 };
}

function mostrarResultado(resultado) {
  document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}

function sumar() {
  const { numero1, numero2 } = obtenerValores();
  const resultado = numero1 + numero2;
  mostrarResultado(resultado);
}

function restar() {
  const { numero1, numero2 } = obtenerValores();
  const resultado = numero1 - numero2;
  mostrarResultado(resultado);
}

function multiplicar() {
  const { numero1, numero2 } = obtenerValores();
  const resultado = numero1 * numero2;
  mostrarResultado(resultado);
}

// Función para realizar la división
function dividir() {
  const { numero1, numero2 } = obtenerValores();
  if (numero2 === 0) {
      mostrarResultado("Error: División por cero no permitida.");
  } else {
      const resultado = numero1 / numero2;
      mostrarResultado(resultado);
  }
}

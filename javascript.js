// Esta función agrega un número o carácter al campo de resultado.
/*    num representa el número o carácter que el usuario introduce en un momento dado.

    numero es el contenido actual del campo de resultado (que podría estar vacío o contener números o caracteres previamente ingresados).*/
//.innerHTML sirve para asignar un nuevo valor a un campo html

// var prueba = (document.getElementById('miElemento').innerHTML = 'Este es mi elemento');
function insert(num) {
  // Obtenemos el contenido actual del elemento con ID 'resultado'.
  var numero = document.getElementById('resultado').innerHTML;
  // Concatenamos el número o carácter seleccionado al contenido existente.
  document.getElementById('resultado').innerHTML = numero + num;
}

// Esta función limpia el campo de resultado, es decir, lo establece como vacío.
function clean() {
  document.getElementById('resultado').innerHTML = '';
}

// Esta función permite borrar el último carácter introducido en el campo de resultado.
function back() {
  // Obtenemos el contenido actual del elemento con ID 'resultado'.
  var resultado = document.getElementById('resultado').innerHTML;
  // Utilizamos substring para eliminar el último carácter.
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

// Esta función evalúa y calcula el resultado de una expresión matemática introducida en el campo de resultado.
function calcular() {
  // Obtenemos el contenido actual del elemento con ID 'resultado'.
  var resultado = document.getElementById('resultado').innerHTML;
  if (resultado) {
    // La función eval() evalúa la expresión matemática y actualiza el campo de resultado con el resultado.
    document.getElementById('resultado').innerHTML = eval(resultado);
  } else {
    // Si no hay nada en el campo de resultado, muestra 'Nada....'.
    document.getElementById('resultado').innerHTML = 'Nada....';
  }
}

// Esta función calcula la raíz cuadrada del número introducido en el campo de resultado.
function calcularRaizCuadrada() {
  // Obtenemos el contenido actual del elemento con ID 'resultado'.
  var resultado = document.getElementById('resultado').innerHTML;
  if (resultado) {
    // Calcula la raíz cuadrada del número y actualiza el campo de resultado con el resultado.
    var raizCuadrada = Math.sqrt(parseFloat(resultado));
    document.getElementById('resultado').innerHTML = raizCuadrada;
  } else {
    // Si no hay nada en el campo de resultado, muestra 'Nada....'.
    document.getElementById('resultado').innerHTML = 'Nada....';
  }
}

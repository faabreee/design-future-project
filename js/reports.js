const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

// Recuperar el estado del modo oscuro desde el almacenamiento local
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Aplicar el modo oscuro si estaba activado
if (isDarkMode) {
    body.classList.add('dark');
    modeText.innerText = "Light mode";
}

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
    // Cambiar el estado del modo oscuro
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
        // Guardar el estado en el almacenamiento local
        localStorage.setItem('darkMode', 'true');
    } else {
        modeText.innerText = "Dark mode";
        // Guardar el estado en el almacenamiento local
        localStorage.setItem('darkMode', 'false');
    }
});







    // Obtener el valor del porcentaje desde el input
    var porcentaje = parseFloat(document.getElementById('porcentajeInput').value);

    // Datos para el gráfico circular
    var datos = {
      labels: ['Vendidos', 'Restante'],
      datasets: [{
        data: [porcentaje, 100 - porcentaje],
        backgroundColor: [
          '#4c4c4c',
          '#e4e4e4' // Puedes ajustar este color para que coincida con el fondo
        ],
        borderWidth: 1
      }]
    };

    // Configuración del gráfico circular
    var configuracion = {
      type: 'doughnut',
      data: datos,
      options: {
        cutout: '65%', // Puedes ajustar este valor para cambiar el tamaño del agujero en el centro
        responsive: true,
        maintainAspectRatio: false,
      }
    };

    // Obtener el contexto del lienzo
    var contexto = document.getElementById('miGraficoCircular').getContext('2d');

    // Crear el gráfico circular
    var miGraficoCircular = new Chart(contexto, configuracion);











// Obtener datos desde la lista HTML
var datosDesdeHTML = document.getElementById('datosGrafico').querySelectorAll('li');

// Procesar datos
var etiquetas = [];
var valores = [];

datosDesdeHTML.forEach(function (elemento) {
  etiquetas.push(elemento.getAttribute('data-label'));
  valores.push(parseInt(elemento.getAttribute('data-valor')));
});

// Datos para el gráfico de barras verticales
var datosBarras = {
  labels: etiquetas,
  datasets: [{
    label: 'Ventas',
    backgroundColor: '#b1b1b1',
    borderColor: 'rgba(0, 0, 0, 0)', // Hace que el color del borde sea transparente
    borderWidth: 0,
    data: valores
  }]
};

// Configuración del gráfico de barras verticales
var configuracionBarras = {
  type: 'bar',
  data: datosBarras,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// Obtener el contexto del lienzo
var contextoBarras = document.getElementById('miGraficoBarras').getContext('2d');

// Crear el gráfico de barras verticales
var miGraficoBarras = new Chart(contextoBarras, configuracionBarras);




document.addEventListener("DOMContentLoaded", function () {
  // Obtener el valor del contador desde el elemento HTML
  var valorFinal = parseInt(document.getElementById('miContador').innerText);

  // Duración de la animación en milisegundos
  var duracionAnimacion = 1200;

  // Función de easing para ralentizar hacia el final
  function easeOutCubic(t) {
      // Modificamos la función de easing para ralentizar más hacia el final
      return 1 - Math.pow(1 - t, 1);
  }

  // Función para actualizar el contador
  function actualizarContador(tiempoTranscurrido) {
      var t = tiempoTranscurrido / duracionAnimacion;
      t = easeOutCubic(t); // Aplicar la función de easing

      var valorActual = Math.min(Math.ceil(t * valorFinal), valorFinal);
      document.getElementById('miContador').innerText = valorActual;
  }

  // Iniciar la animación
  var tiempoInicio = null;

  function animarContador(tiempoActual) {
      if (!tiempoInicio) tiempoInicio = tiempoActual;
      var tiempoTranscurrido = tiempoActual - tiempoInicio;

      actualizarContador(tiempoTranscurrido);

      if (tiempoTranscurrido < duracionAnimacion) {
          requestAnimationFrame(animarContador);
      }
  }

  requestAnimationFrame(animarContador);
});

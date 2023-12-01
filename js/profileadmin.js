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








// Función para filtrar productos por categoría
function filtrarProductos(categoria) {
    // Obtener todas los botones de filtro
    var botones = document.querySelectorAll('.filtro-btn');
  
    // Remover la clase 'seleccionado' de todos los botones
    botones.forEach(function(btn) {
      btn.classList.remove('seleccionado');
    });
  
    // Agregar la clase 'seleccionado' al botón actual
    var botonSeleccionado = document.querySelector('.filtro-btn[data-categoria="' + categoria + '"]');
    botonSeleccionado.classList.add('seleccionado');
  
    // Obtener todas las tarjetas de productos
    var cards = document.querySelectorAll('.card');
  
    // Mostrar u ocultar tarjetas según la categoría seleccionada
    cards.forEach(function(card) {
      if (categoria === 'todas' || card.id === categoria) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  




  function buscarProductos() {
    // Obtener el valor del campo de búsqueda
    var query = document.getElementById('inputBuscar').value.toLowerCase();

    // Obtener todas las tarjetas de productos
    var cards = document.querySelectorAll('.card');

    // Filtrar las tarjetas según la consulta de búsqueda
    cards.forEach(function(card) {
        var titulo = card.querySelector('.card-title').innerText.toLowerCase();
        if (titulo.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}










let currentSlide = 0;

function showSlide() {
    const carousel = document.querySelector('.carousel');
    currentSlide = (currentSlide + 1) % 5;
    carousel.style.transform = `translateX(-${currentSlide * 20}%)`;
}

setInterval(showSlide, 4000); // Cambia la imagen cada 2 segundos (2000 milisegundos)














const inputImagen = document.getElementById('inputImagen');
const imagenMostrada = document.getElementById('imagenMostrada');

inputImagen.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      imagenMostrada.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});












function mostrarContrasena() {
  var campoContrasena = document.getElementById("contrasena");
  var icono = document.querySelector(".toggle-icon");

  if (campoContrasena.type === "password") {
    if (campoContrasena.value !== "") {
      campoContrasena.type = "text";
      icono.classList.remove("fa-eye");
      icono.classList.add("fa-eye-slash");
    }
  } else {
    campoContrasena.type = "password";
    icono.classList.remove("fa-eye-slash");
    icono.classList.add("fa-eye");
  }
}

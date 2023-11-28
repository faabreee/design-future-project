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







//MOSTRAR DIALOGO ANUNCIO DE CARRITO DE COMPRAS
// Obtener todos los botones que abrirán el cuadro de diálogo por su clase
var fondoSuperposicion = document.createElement('div');
    fondoSuperposicion.id = 'fondo-superposicion';

    function mostrarDialogo(boton) {
        var card = boton.closest('.card');
        var dialogoAnuncio = card.querySelector('.dialogo-anuncio');

        if (dialogoAnuncio) {
            mostrarDialogoInternal(dialogoAnuncio);
        }
    }

    function mostrarDialogoInternal(dialogoAnuncio) {
        dialogoAnuncio.style.display = 'block';
        dialogoAnuncio.classList.remove('desaparecer');
        dialogoAnuncio.classList.add('aparecer');
        document.body.appendChild(fondoSuperposicion);
    }

    function ocultarDialogo(botonCerrar) {
        var card = botonCerrar.closest('.card');
        var dialogoAnuncio = card.querySelector('.dialogo-anuncio');

        if (dialogoAnuncio) {
            ocultarDialogoInternal(dialogoAnuncio);
        }
    }

    function ocultarDialogoInternal(dialogoAnuncio) {
        dialogoAnuncio.classList.remove('aparecer');
        dialogoAnuncio.classList.add('desaparecer');
        setTimeout(function () {
            dialogoAnuncio.style.display = 'none';
        }, 300);
        document.body.removeChild(fondoSuperposicion);
        document.body.style.overflow = "auto";
    }





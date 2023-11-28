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








const datosLinks = document.querySelectorAll('.datos-link');
const datosContents = document.querySelectorAll('.datos');

datosLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const tabId = link.getAttribute('data-tab');
        const datosContent = document.getElementById(tabId);

        datosContents.forEach(content => {
            content.classList.remove('active');
        });

        datosContent.classList.add('active');
    });
});




function actualizarTexto(idCampo, claseP) {
    // Obtén el valor del campo de entrada
    var valorCampo = document.getElementById(idCampo).value;
    
    // Actualiza el texto en el elemento <p> correspondiente
    document.querySelector('.' + claseP).textContent = valorCampo;
}



















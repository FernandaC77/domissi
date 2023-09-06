document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".sidebar .btn");
    const tables = document.querySelectorAll(".table-container .tables");

    // Mostrar la tabla de "Ángulos" por defecto al cargar la página
    const defaultTable = document.querySelector(".table-container .angulos");
    if (defaultTable) {
        defaultTable.style.display = "block";
    }

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const target = this.getAttribute("data-target");
            
            // Ocultar todas las tablas
            tables.forEach((table) => {
                table.style.display = "none";
            });
            
            // Mostrar la tabla correspondiente al botón
            const tableToShow = document.querySelector(`.table-container .${target}`);
            if (tableToShow) {
                tableToShow.style.display = "block";
            }

            // Cambiar la clase activa
            buttons.forEach((btn) => {
                btn.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});


// Detecta el evento de desplazamiento
window.addEventListener("scroll", function() {
    // Calcula la posición actual de desplazamiento
    var scrollPosition = window.scrollY;
    
    // Mueve la imagen de derecha a izquierda
    var imagen = document.querySelector(".img-mobile-deslizante");
    imagen.style.left = -scrollPosition + "px";
});


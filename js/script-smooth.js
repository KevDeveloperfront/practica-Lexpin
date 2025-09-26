// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
  // Seleccionar todos los enlaces con href que comienzan con '#'
  const anchors = document.querySelectorAll('a[href^="#"]');

  // Iterar sobre cada enlace
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
      const href = this.getAttribute('href'); // Obtener el valor del href
      const target = document.querySelector(href); // Encontrar el elemento objetivo

      if (target) { // Verificar que el elemento existe
        target.scrollIntoView({
          behavior: 'smooth' // Desplazamiento suave
        });
      }
    });
  });
});
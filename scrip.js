document.getElementById('animalesLink').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento de enlace por defecto
    const dropdown = document.getElementById('animalDropdown');
    
    // Alternar visibilidad de la barra desplegable
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

// Para cerrar la barra desplegable si se hace clic fuera de ella
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('animalDropdown');
    const animalesLink = document.getElementById('animalesLink');
    
    // Cerrar el menú si el clic está fuera del botón de "Animales" y del menú
    if (!animalesLink.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
    
});


   
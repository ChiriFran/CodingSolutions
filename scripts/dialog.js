let modal = document.getElementById('modalContainer');

let botonAbrirModal = document.getElementById('botonAbrirModal');
let botonAbrirModalNav = document.getElementById('botonAbrirModalNav');

let botonCerrarModal = document.getElementById('botonCerrarModal');

// Función para mostrar el modal con animación
function abrirModal() {
    modal.classList.remove('hiding');
    modal.classList.add('showing');
    modal.showModal();
    document.body.style.overflow = 'hidden'; // Deshabilitar el scroll
}

// Función para cerrar el modal con animación
function cerrarModal() {
    modal.classList.remove('showing');
    modal.classList.add('hiding');
    setTimeout(() => {
        modal.close();
        document.body.style.overflow = ''; // Rehabilitar el scroll
    }, 600);  // Espera a que termine la animación antes de cerrar
}

// Evento para abrir modal al hacer clic en los botones correspondientes
botonAbrirModal.addEventListener('click', abrirModal);
botonAbrirModalNav.addEventListener('click', abrirModal);

// Eventos para cerrar modal al hacer clic en los botones de cierre
botonCerrarModal.addEventListener('click', cerrarModal);

// Evento para cerrar modal haciendo clic fuera de él
modal.addEventListener('click', e => {
    const dialogDimensions = modal.getBoundingClientRect();
    const isClickOutside = e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom;

    if (isClickOutside) {
        cerrarModal();  // Primero dispara la animación de cierre
    }
});

// Evitar que el clic dentro del modal cierre el modal
modal.addEventListener('click', e => {
    e.stopPropagation();  // Detiene la propagación del evento para evitar el cierre al hacer clic dentro del modal
});

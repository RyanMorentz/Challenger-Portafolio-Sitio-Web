//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.contacto__formulario');
    const campos = formulario.querySelectorAll('.contacto__campo');
    const botonEnviar = formulario.querySelector('.contacto__boton');
    const scrollToTopImage = document.getElementById('logo');

    // Función para mostrar el mensaje de éxito
    function mostrarMensaje(mensaje, tipo) {
        const mensajeDiv = document.createElement('div');
        mensajeDiv.classList.add('mensaje', tipo);
        mensajeDiv.textContent = mensaje;

        formulario.appendChild(mensajeDiv);

        // Eliminar el mensaje después de 5 segundos
        setTimeout(() => {
            mensajeDiv.remove();
        }, 5000);
    }

    // Validación del formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar el envío real del formulario

        let valido = true;

        // Recorremos todos los campos y verificamos si están vacíos
        campos.forEach(campo => {
            if (campo.value.trim() === '') {
                valido = false;
                campo.classList.add('error'); // Añadimos la clase error si el campo está vacío
            } else {
                campo.classList.remove('error');
            }
        });

        // Validación de email (formato básico)
        const emailCampo = formulario.querySelector('input[type="email"]');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailCampo.value && !emailRegex.test(emailCampo.value)) {
            valido = false;
            emailCampo.classList.add('error');
            mostrarMensaje('Por favor, ingresa un correo electrónico válido.', 'error');
        }

        // Si todo es válido, mostramos mensaje de éxito
        if (valido) {
            mostrarMensaje('¡Mensaje enviado con éxito!', 'exito');
            formulario.reset(); // Limpiar el formulario después de enviarlo
        } else {
            mostrarMensaje('Por favor, completa todos los campos correctamente.', 'error');
        }
    });

    // Estilo para los campos con error
    campos.forEach(campo => {
        campo.addEventListener('input', () => {
            if (campo.value.trim() !== '') {
                campo.classList.remove('error');
            }
        });
    });
});


logo.addEventListener('click', function() {
    window.scrollTo({
        top: 0, // Desplazar hasta la parte superior
        behavior: 'smooth' // Efecto de desplazamiento suave
    });
});

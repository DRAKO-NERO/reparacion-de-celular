// Función para mostrar el certificado
function mostrarCertificado() {
    var certificado = document.getElementById('certificado');
    certificado.style.display = 'block';
  }
  
  // Función para ocultar el certificado
  function ocultarCertificado() {
    var certificado = document.getElementById('certificado');
    certificado.style.display = 'none';
  }
  
  // Función para mostrar el curriculum vitae
  function mostrarCurriculumVitae() {
    var curriculumVitae = document.getElementById('curriculum-vitae');
    curriculumVitae.style.display = 'block';
  }
  
  // Función para ocultar el curriculum vitae
  function ocultarCurriculumVitae() {
    var curriculumVitae = document.getElementById('curriculum-vitae');
    curriculumVitae.style.display = 'none';
  }
  
  // Función para mostrar el servicio
  function mostrarServicio() {
    var servicio = document.getElementById('servicio');
    servicio.style.display = 'block';
  }
  
  // Función para ocultar el servicio
  function ocultarServicio() {
    var servicio = document.getElementById('servicio');
    servicio.style.display = 'none';
  }
  
  // Función para mostrar el contacto
  function mostrarContacto() {
    var contacto = document.getElementById('contacto');
    contacto.style.display = 'block';
  }
  
  // Función para ocultar el contacto
  function ocultarContacto() {
    var contacto = document.getElementById('contacto');
    contacto.style.display = 'none';
  }
  
  // Función para mostrar el mapa
  function mostrarMapa() {
    var mapa = document.getElementById('mapa');
    mapa.style.display = 'block';
  }
  
  // Función para ocultar el mapa
  function ocultarMapa() {
    var mapa = document.getElementById('mapa');
    mapa.style.display = 'none';
  }
  
  // Función para mostrar el pie de página
  function mostrarPiePagina() {
    var piePagina = document.getElementById('pie-pagina');
    piePagina.style.display = 'block';
  }
  
  // Función para ocultar el pie de página
  function ocultarPiePagina() {
    var piePagina = document.getElementById('pie-pagina');
    piePagina.style.display = 'none';
  }
  
  // Eventos para los botones
  document.getElementById('boton-certificado').addEventListener('click', mostrarCertificado);
  document.getElementById('boton-curriculum-vitae').addEventListener('click', mostrarCurriculumVitae);
  document.getElementById('boton-servicio').addEventListener('click', mostrarServicio);
  document.getElementById('boton-contacto').addEventListener('click', mostrarContacto);
  document.getElementById('boton-mapa').addEventListener('click', mostrarMapa);
  document.getElementById('boton-pie-pagina').addEventListener('click', mostrarPiePagina);
  
  // Eventos para los enlaces
  document.getElementById('enlace-certificado').addEventListener('click', mostrarCertificado);
  document.getElementById('enlace-curriculum-vitae').addEventListener('click', mostrarCurriculumVitae);
  document.getElementById('enlace-servicio').addEventListener('click', mostrarServicio);
  document.getElementById('enlace-contacto').addEventListener('click', mostrarContacto);
  document.getElementById('enlace-mapa').addEventListener('click', mostrarMapa);
  document.getElementById('enlace-pie-pagina').addEventListener('click', mostrarPiePagina);

  /**/
/*ubicacion.html*/

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Limpiar los errores previos
  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('message-error').textContent = '';

  // Obtener valores del formulario
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let formIsValid = true;

  // Validación de nombre
  if (name === '') {
    document.getElementById('name-error').textContent = 'Por favor, ingresa tu nombre.';
    formIsValid = false;
  }

  // Validación de correo electrónico o número de WhatsApp
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const phoneRegex = /^[0-9]{10,15}$/;  // Ajustar según el formato de número de WhatsApp

  if (email === '') {
    document.getElementById('email-error').textContent = 'Por favor, ingresa tu correo electrónico o número de WhatsApp.';
    formIsValid = false;
  } else if (!emailRegex.test(email) && !phoneRegex.test(email)) {
    document.getElementById('email-error').textContent = 'Por favor, ingresa un correo electrónico o número de WhatsApp válido.';
    formIsValid = false;
  }

  // Validación de mensaje
  if (message === '') {
    document.getElementById('message-error').textContent = 'Por favor, escribe tu mensaje.';
    formIsValid = false;
  }

  if (formIsValid) {
    // Enviar datos al servidor (save_data.php)
    fetch('save_data.php', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Crear el enlace de WhatsApp con un formato de comentario
        const phoneNumber = '978334237'; // Reemplaza con tu número de WhatsApp
        const encodedMessage = encodeURIComponent(`Hola, mi nombre es ${name}.\nMi correo o número es ${email}.\n\nComentario:\n"${message}"`);
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Redirigir al usuario a WhatsApp
        window.open(whatsappLink, '_blank');
      } else {
        // Si ocurre un error al guardar los datos, mostrar un mensaje
        alert('Hubo un problema al guardar los datos. Intenta nuevamente.');
      }
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
      alert('Hubo un problema al guardar los datos. Intenta nuevamente.');
    });
  }
});

/*

OTRO CODIGO
 */

// Agrega un evento de clic a cada imagen de la galería
const imagenes = document.querySelectorAll('.galeria-imagenes img');

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', () => {
      // Abre la imagen en una ventana emergente
      const ventanaEmergente = window.open(imagen.src, '_blank');
      ventanaEmergente.focus();
  });
});
// Función para abrir enlace de WhatsApp
function abrirWhatsApp() {
  window.location.href = 'https://wa.me/978334237';
}

// Selecciona el botón
const botonWhatsApp = document.getElementById('boton-whatsapp');

// Agrega evento de clic al botón
botonWhatsApp.addEventListener('click', abrirWhatsApp);


function agrandarImagen(imagen) {
  document.getElementById('header').style.display = 'none';
  const fondoOscuro = document.getElementById('fondoOscuro');
  const imagenAgrandada = document.getElementById('imagenAgrandada');
  const imgAgrandada = document.getElementById('imgAgrandada');

  // Mostrar el fondo oscuro y la imagen agrandada
  fondoOscuro.style.display = 'flex';
  imagenAgrandada.style.display = 'block';

  // Establecer la imagen a agrandar
  imgAgrandada.src = imagen.src;
}

function cerrarImagen() {
  document.getElementById('header').style.display = 'block';
  const fondoOscuro = document.getElementById('fondoOscuro');
  const imagenAgrandada = document.getElementById('imagenAgrandada');

  // Ocultar el fondo oscuro y la imagen agrandada
  fondoOscuro.style.display = 'none';
  imagenAgrandada.style.display = 'none';
}
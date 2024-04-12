// Función para mostrar un mensaje de confirmación personalizado
function mostrarMensaje() {
  // Cambiar este mensaje según tu preferencia
  var mensaje = "¡Formulario enviado a Ing. Oscar Cabrera con éxito!";
  // Mostrar el mensaje personalizado
  alert(mensaje);
}

// Función para validar el formulario antes de enviarlo
function validarFormulario() {
  // Obtener los valores de los campos del formulario
  var nombre = document.forms["form"]["nombre"].value; // Obtener el valor del campo nombre
  var email = document.forms["form"]["email"].value; // Obtener el valor del campo email
  var asunto = document.forms["form"]["asunto"].value; // Obtener el valor del campo asunto
  var mensaje = document.forms["form"]["mensaje"].value; // Obtener el valor del campo mensaje

  // Validar si algún campo está vacío
  if (nombre == "" || email == "" || asunto == "" || mensaje == "") {
      // Mostrar mensaje de error si algún campo está vacío
      alert("Por favor, completa todos los campos del formulario.");
      return false; // Evitar que se envíe el formulario
  }

  // Validar el formato del email
  if (!validarEmail(email)) {
      // Mostrar mensaje de error si el formato del email es inválido
      alert("Por favor, ingresa un email válido.");
      return false; // Evitar que se envíe el formulario
  }

  // Mostrar mensaje de confirmación personalizado si el formulario se envía correctamente
  mostrarMensaje();
  return true; // Permitir que se envíe el formulario
}

// Función para validar el formato del email
function validarEmail(email) {
  // Expresión regular para validar el formato del email
  var re = /\S+@\S+\.\S+/;
  return re.test(email); // Devuelve true si el email tiene un formato válido, de lo contrario devuelve false
}
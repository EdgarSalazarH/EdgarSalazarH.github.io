function validateEmail() {
    // Datos de entrada
    var emailField = document.getElementById('email');

    // Expresiones regulares
    var validEmail = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;

    // Textos de Validación
    if (validEmail.test(emailField.value)) {
        alert('Email válido. ¡Bienvenido!');
        return true;
    } else {
        alert('Email inválido. Email incorrecto.');
        return false;
    }
}

function validateForm(event)  {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    var motivo = document.getElementById('motivo').value;

    // Verificar si los campos obligatorios están vacíos
    if (nombre === '' || email === '' || mensaje === '' || motivo === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return false; 
    }else
    {
        window.location.href = "./gracias.html";
    }
    return true; 
}

function validateForm2(event) {
    event.preventDefault();
    const name = document.getElementById('cardholder-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvc = document.getElementById('cvc').value;

    if (name === '' || cardNumber === '' || expiryDate === '' || cvc === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        window.location.href = "./compra.html";
    }
    return true;
}
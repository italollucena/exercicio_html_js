const form = document.getElementById('form-valores');
const campoB = document.getElementById('campo-B');
const campoA = document.getElementById('campo-A');
let formEValido = false;

function validarCampo(campoB, campoA) {
    if (campoB > campoA) {
    return true;
    } else {
    return false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemDeSucesso = `Os valores foram enviados com sucesso!`;
    formEValido = validarCampo(campoB.value, campoA.value);

    if (formEValido) {
    const containerMensagemDeSucesso = document.querySelector('.success-message');
    containerMensagemDeSucesso.innerHTML = mensagemDeSucesso;
    containerMensagemDeSucesso.style.display = 'block';
    campoB.value = '';
    campoA.value = '';
    document.querySelector('.error-message').style.display = 'none';
    } else {
    campoB.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
    document.querySelector('.success-message').style.display = 'none';
    }
});

campoB.addEventListener('keyup', function(e) {
    formEValido = validarCampo(e.target.value, campoA.value);

    if (!formEValido) {
    campoB.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
    } else {
    campoB.style.border = '1px solid #ccc';
    document.querySelector('.error-message').style.display = 'none';
    }
});

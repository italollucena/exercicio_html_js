const form = document.getElementById('form-valores');
let campoB = document.getElementById('campo-B');
let campoA = document.getElementById('campo-A');
let formEValido = false;

function validarCampo (campoB , campoA) {
const validarCampo = false;
if (validarCampo === campoB > campoA) {
return false;
} else {
    return true;
}};

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-A ');
    const campoB = document.getElementById('campo-B');
    const mensagemDeSucesso = `Os valores foram enviados com sucesso!`;
    formEValido = validarCampo(campoB > campoA.value);
    
if (formEValido) {
    const containerMensagemDeSucesso = document.querySelector('.success-message');
        containerMensagemDeSucesso.innerHTML = mensagemDeSucesso;
        containerMensagemDeSucesso.style.display = 'block';
campoB.value = '';
campoA.value = '';
} else {
    campoB.style.border = '1px solid red'
    document.querySelector('.error-message').style.display = 'block';
}
});

campoB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validarCampo(e.target.value);
    
    if (!formEValido) {
        campoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
        }
        else {
            campoA.classList.remove('error');
            document.querySelector('.error-message').style.display = 'none';
        }
    });
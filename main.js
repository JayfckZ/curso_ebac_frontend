const form = document.getElementById('form');
const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');

console.log(valor1);
console.log(valor2);
let formValido = false;

function validaForm(v1, v2){
    const validacao = parseInt(v2) > parseInt(v1);
    console.log(validacao)
    return validacao;
}

form.addEventListener('submit', function(e) { 
    e.preventDefault();

    const mensagemSucesso = 'Enviado com sucesso!'
    

    formValido = validaForm(valor1.value, valor2.value);
    if (formValido){

        valor1.classList.remove('error');
        valor2.classList.remove('error');
        document.getElementById('error-message').style.display = 'none';

        const containerMensageSucesso = document.getElementById('success-message');
        containerMensageSucesso.innerHTML= mensagemSucesso;
        containerMensageSucesso.style.display = 'Block'

        valor1.value = '';
        valor2.value = '';
    }

    else {
        valor1.classList.add('error');
        valor2.classList.add('error');
        document.getElementById('error-message').style.display = 'Block';
    }
})

valor1.addEventListener('keyup', function(e) {
    formValido = validaForm(valor1.value, valor2.value)
    console.log(e.target.value)

    if (!formValido){
        valor1.classList.add('error');
        valor2.classList.add('error');
        document.getElementById('error-message').style.display = 'Block';
    }
    else{
        valor1.classList.remove('error');
        valor2.classList.remove('error');
        document.getElementById('error-message').style.display = 'none';
    }
    
});

valor2.addEventListener('keyup', function(e) {
    formValido = validaForm(valor1.value, valor2.value)
    console.log(e.target.value)
    
    if (!formValido){
        valor1.classList.add('error');
        valor2.classList.add('error');
        document.getElementById('error-message').style.display = 'Block';
    }
    else{
        valor1.classList.remove('error');
        valor2.classList.remove('error');
        document.getElementById('error-message').style.display = 'none';
    }
    
});




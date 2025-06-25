const formulario = document.getElementById('formulario-numeros');
const n1 = document.getElementById('number1');
const n2 = document.getElementById('number2');
const retorno = document.getElementById('retorno-mensagem');

window.onload = function () {
    n1.focus();
}

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    calculaNumeroMaior(Number(n1.value), Number(n2.value));
})

function calculaNumeroMaior(number1, number2) {
    if (number2 > number1) {
        retorno.innerHTML = '<h2>Dados válidos.<br />Cadastro efetuado com sucesso!</h2><h3>----- <i>Aguarde, redirecionando...</i></h3>';
        setTimeout(function () {
            location.reload();
        }, 3000);
    } else {
        alert('Dados inválidos! Corrija e tente novamente!');
        retorno.innerHTML = ''
        location.reload();
    }
}
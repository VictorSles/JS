function ativar() {
    tempo = setInterval(function () {
        var tempo = document.getElementById("divs").innerHTML;
        var soma = parseInt(tempo) + 1;
        document.getElementById("divs").innerHTML = soma;
    }, 1000);
}

function parar(){
    clearInterval(tempo)
}
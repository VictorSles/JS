
function verificar() {
    var dado1 = document.getElementById("text").value
    if (dado1 == "" || dado1 == null) {
        let p = document.getElementById("divs");
        p.innerHTML = `Nao pode haver espaco em branco`;
        p.style.color = "red";
    }else{
        let p = document.getElementById("divs");
        p.innerHTML = `Parabens tudo certinho`;
        p.style.color = "green";
    }
}
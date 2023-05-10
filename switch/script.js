
function verificar() {
    let cor = document.getElementById("cor").value;
    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        case "verde":
            document.body.style.backgroundColor = "green";
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;
        default:
            document.getElementById("divs").innerHTML = `A cor eleita nao está disponível`;
    }
}
function enviar() {
    let valorString = document.getElementById("texto").value;
    let idiv = document.getElementById("idiv")
    if (valorString % 2 == 0) {
        idiv.innerHTML = `${valorString} é um numero PAR`;
    } else {
        idiv.innerHTML = `${valorString} é um numero IMPAR`;
    }
}

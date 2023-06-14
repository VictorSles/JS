
function enviar() {
    let variavel = document.getElementById("texto1").value;
    let contI = "";
    let contP = "";

    console.log("teste OK");
    for (i = 0; i < variavel; i++) {
        if (i % 2 == 0) {
            contI += i + 1;
        } else {
            contP += i + 1;
        }
    } i++;

    let Pares = contP.split("");
    let Impares = contI.split("");

    Pares.forEach(valores_pares => {
        console.log(valores_pares, " - PAR");
    });
    Impares.forEach(valores_impares => {   
        console.log(valores_impares, " - IMPAR");
    });
}


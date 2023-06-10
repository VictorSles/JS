function enviar(){
    let variavel = document.getElementById("texto").value;
    let variavel_2 = Number(variavel);
    while (variavel_2 < 1){
        let variavel_3 = variavel_2 - 1
        document.getElementById("idiv").innerHTML=`${variavel_3}`;
    }
}

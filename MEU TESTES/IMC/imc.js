const calculcar = document.getElementById("calcular")

function imc() {
    const nome = document.getElementById("nome").value 
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value 
    const resultado = document.getElementById("resultado")
    if (nome !== "" && altura !== "" && peso !== ""){
        const valorIMC = (peso / altura**2).toFixed(2);
        let classificacao = "";
        if (valorIMC < 25){
            classificacao = "peso ideal"
        }
        else if (valorIMC < 30){
            classificacao = "levemente acima do peso"
        }
        else if(valorIMC < 35){
            classificacao = "Obesidade grau 1"
        }
        resultado.textContent = `${nome}, seu IMC é de ${valorIMC}, e sua classificacao é: ${classificacao}`
    }else{
        resultado.textContent = "Preencha todos os valores!!"
    }
}
calculcar.addEventListener("click", imc);
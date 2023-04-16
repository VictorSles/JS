// As "var" sempre vao antes de "function"

var numerodig = document.getElementById("numero1")
var vselect = document.getElementById("idselect")
var numeroreal = Number(numerodig.value)
var selectreal = Number(vselect.value)
var res = document.getElementById("res")
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else
        return false
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(numerodig.value) && !inLista(numerodig.value, valores)){
        valores.push(Number(numerodig.value))
        var selectoption = document.createElement(`option`)
        selectoption.text = `O valor ${Number(numerodig.value)} foi adicionado!`
        vselect.appendChild(selectoption)
        res.innerHTML = ``                                                              // Esse parametro serve para
                                                                                        // esvaziar toda vez que se completa o parametro
    }else{
        window.alert(`O valor ${Number(numerodig.value)} já foi adicionado!`)
    }
    numerodig.value = ``       // Serve pra fazer com que o select apague a cada pesquisa feita
    numerodig.focus()          // Focus() é o complemento do do comentario acima
}
function finalizar(){
    if(valores.length == 0){
        window.alert("Adicione valores antes de finalizar!")
    }else {
        var totalDEvalores = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var posicao in valores){ 
            soma += valores[posicao]                 // Sinceramente eu nao entendi esse codigo sobre
            if (valores[posicao] > maior)            // maior e menor, mas o fato é que funciona, sei se 
            maior = valores[posicao]                 // me esforcar e pesquisar mais, vou entender!
            if (valores[posicao] < menor)            //
            menor = valores[posicao]                 //
        }
        media = soma / totalDEvalores
        res.innerHTML = ``
        res.innerHTML += `<p> Ao todo temos ${totalDEvalores} numeros cadastrados </p>`
        res.innerHTML += `<p> O maior valor é ${maior}</p>`
        res.innerHTML += `<p> O menor valor é ${menor}</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p> A media dos valores é ${media}</p>`
    }
}



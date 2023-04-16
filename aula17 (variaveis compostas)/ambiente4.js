// Funcoes com parametros (importantissimo)
// Pode ser tanto usado para Node.js ou paginas WEB

function parouínpar(n){
    if (n%2==0){
        return`par`
    }else{
        return`Impar`
    }
}
var res = parouínpar (11)   // 11 é a chamada, ou seja, o valor no qual se descobrirá se é par ou impar
console.log(res)

/*-------------------------------------------------------------------------------------------------------*/

// Tambem posso usar 2 ou + parametros em um "return"

function valores (n1,n2) {
    return n1 + n2
}
var valores2 = valores(3,5)
console.log(valores2)

/*-------------------------------------------------------------------------------------------------------*/

// igualamos os parametros a 0 pois caso aja somente 1 valor posto, em lugar de dar NuN, dará o unico valor 
// posto

function valores (n1=0,n2=0) {
    return n1 + n2
}
var valores2 = valores(3)
console.log(valores2)



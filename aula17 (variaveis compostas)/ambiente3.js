// SCRIPT: Para cada "posicao" em "num", eu vou mostras o "num[posicao]"
var valores = [3,2,5,2,5,7,1,4,8,9,8]
valores.sort()
var posicao = 0
for (posicao in valores){
    console.log(`A posicao ${posicao} tem o valor ${valores[posicao]}`)
}
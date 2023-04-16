/* Existe  uma diferenca entre OBJETOS e ARRAY.. O ARRAY guarda vairaveis  com uma contagem comecando
a partir do 0 em diante... Já o OBJETOS permite que definamos qual será o "nome" da variavel em que guardaremos */

// OBJETO

var amigo1 = {nome: `josé`, sexo:`M`, peso: `84.9`}
console.log(amigo1)

// Abaixo posso ver como usar a orientacao a objeto com uma funcao dentro.

var amigo1 = {nome: `josé`,
sexo:`M`,                                   // Sim.. para economizar linhas podemos ordenar cada variavel assim
peso: 84.9,
engordar(p=0){                              // As chaves apos o parametro sao obrigatórias
console.log(`Engordou!`) 
this.peso += p
}}

// Veja que todos os dados acima estao no mesmo objeto

// Abaixo posso ver como posso alterar a variavel "engordar" mesmo estando fora do objeto
// e isso  serve para muitas coisas, é só saber a técnica e ter criatividade!

amigo1.engordar(5)
console.log(`${amigo1.nome} pesa ${amigo1.peso} Kg`)

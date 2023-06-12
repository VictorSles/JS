let valores = [
    { sugestao: "Até R$ 700", minimo: 0, maximo: 700 },
    { sugestao: "De R$ 700 até R$ 1000", minimo: 700, maximo: 1000 },
    { sugestao: "Acima de R$ 1000", minimo: 1000, maximo: 100000000 }
]
function faixaPreco(sugestao, minimo, maximo) {
    return {
        sugestao,
        minimo,
        maximo
    }
}
let valores2 = [
    faixaPreco("a", 0, 700),
    faixaPreco("b", 700, 1000),
    faixaPreco("c", 1000, 100000000)
]

console.log(valores);
console.log(valores2)








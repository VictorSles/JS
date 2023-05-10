const numeros = [1,53,14,76,25,97,23,1,12];

const maior20 = numeros.filter(funcao_filtrar)

document.getElementById("exemplo").innerHTML = maior20

function funcao_filtrar (value, index, Array){
    return value > 20;
}


//function maiornumero (Array){
//    return Math.max.apply(null, Array);
//}   
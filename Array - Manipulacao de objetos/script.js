const meu_array = ["carros", "mansoes", "joias", "bilhoes", "poder",
"conhecimento em abundancia"]

const meu_array2 = ["exemplo1", "exemplo2", "exemplo3"]

const superlista = meu_array.concat(meu_array2);

const ordemAlfabetica = superlista.sort();

//meu_array.pop();
//meu_array.push("exemplo")

//meu_array.shift()
//meu_array.unshift("exemplo2")

//meu_array.splice(1, 0, "novo item adicionado 1", "novo item 2")

document.getElementById("meudiv").innerHTML = ordemAlfabetica.join("**");

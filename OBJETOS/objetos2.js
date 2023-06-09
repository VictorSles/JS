// OBJETO
const meuObjeto = {
    nome: "Israel Victor Dias Sales",
    idade: 19,
    data_nascimento: "19/10/2003",
    pais: {
    nome_mae: "Alessandra Lima Dias",
    nome_pai: "Israel Sales de Castro",
    },
    local_nascimento: {
        estado: "Amazonas",
        cidade: "Manaus",
        bairro: "Coroado",
        rua: "Joana Darc",
        n_cas: "N° 04"
    }
};
//ARRAY
const meuArray = ["victor", 19, "Manaus - AM", "Mae: Alessandra Lima Dias", "Pai: Israel Sales de Castro", "Data_Nascimento: 19/10/2003"];

// RETIRAR E ACRESCENTAR O ULTIMO

meuArray.pop();
meuArray.push("Israel");

//ALGO ENTRE OS ELEMENTOS

meuArray.join("**");

//RETIRAR E ACRESCENTAR O PRIMEIRO

meuArray.shift();
meuArray.unshift("Data_Nascimento: 24/02/1984");
var tipo = typeof(meuArray);

// PO-LOS em ORDEM CRESCENTE

var crescente = meuArray.sort();

// CONCATENAR

const meuArray2 = ["qualquer coisa", 1988, true, null, ""];

var superlista = meuArray.concat(meuArray2);

// SPLICE 

superlista.splice(10, 0, "preencher o vazio anterior");

// FILTRAR

var filtroLista = superlista.filter(minhaFuncao);

function minhaFuncao(){
    let crescente = superlista.sort();
    let quantidadeLetras = superlista.length;
    document.getElementById("abc").innerHTML=`Ao todo existem ${quantidadeLetras} e sua representacao em ordem crescente é: </br> ${crescente}`
}

//MUDAR ELEMENTOS COM FUNCAO


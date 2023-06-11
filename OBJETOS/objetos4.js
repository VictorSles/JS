function enviar(estado, cidade, bairro, rua) {
    return {
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua
    }
}
let objetoUm = new enviar("a", "b", "c", "d");
let objetoDois = new enviar("a", "b", "c", "d");

//function saoIguais(objetoUm, objetoDois) {
//    return objetoUm.estado === objetoDois.estado && 
//    objetoUm.cidade === objetoDois.cidade && 
//    objetoUm.bairro === objetoDois.bairro && 
//    objetoUm.rua === objetoDois.rua
//}
let objetoNeutro = objetoUm

function compararEnderecosMemoria(objetoUm, objetoNeutro){
    return objetoUm === objetoNeutro;
}


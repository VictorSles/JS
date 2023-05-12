// Mostra a dara com todos os dados
var data = new Date();
document.getElementById("data").innerHTML = data;
//Mostra a somente o Ano atual
var ano = data.getFullYear();
console.log(ano)
//Mostra somente o mes
var mes = data.getMonth();
console.log(mes)
//Mostrar mes com seus nome através de Array
const nomeMes = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio",
    "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

const mesFinal = nomeMes[data.getMonth()]
console.log(mesFinal);
//Mostrar as horas
var hora = data.getHours();
console.log(hora);
//Mostrar os minutos
var minuto = data.getMinutes();
console.log(minuto);
//Mostrar os segundos 
var segundos = data.getSeconds();
console.log(segundos);
//Mostrar os milisegundos
var milisegundos = data.getMilliseconds();
console.log(milisegundos);
//Data no padrao BRASILEIRO
var padraoBR = data.toLocaleString("pt-BR", { dateStyle: "short" })
console.log(padraoBR)

//Alternativa de concatenacao

var datta = new Date();
var diaMess = data.getDate();
var mess = data.getMonth() + 1;
var anoo = data.getFullYear();

function adicionarZero(x) {
    return x < 10 ? "0" + x : "" + x
};

var total = adicionarZero(diaMess) + "/" + adicionarZero (mess) + "/" + anoo;
console.log(total)
// SCRIPT para colocar a hora atual do seu computador
var minhahora = new Date()
var hora = minhahora.getHours()
console.log(`Sao exatamente ${hora} horas aqui`)
if (hora <= 23.59 && hora >= 19 ){
    console.log("Boa Noite")
}else if(hora >= 12 && hora < 19){
    console.log("Boa Tarde")
}else if (hora < 12 && hora >= 6){
    console.log("Boa Dia")
}else if (hora > 0 && hora <= 5){
    console.log("Boa madrugada")
}else{
    console.log("Só pode ser entre 0 e 23.59")
}
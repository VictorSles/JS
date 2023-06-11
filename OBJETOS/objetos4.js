function enviar(numeroPrimo) {
    let teste = ``;
    for (i = 0; numeroPrimo > i; i++) {
        if (i % 2 !== 0){
            teste = `${i} é um numero primo`
            console.log(teste)
        }else{
            console.log()
        }
    }i++
}

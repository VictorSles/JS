function clicar(){
    let inicio = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")
    let cont = 1
    /*------------------------------------------------ */
    res.innerHTML=`Contando:  `
    let inicio1 = Number(inicio.value)
    let fim1 = Number(fim.value)
    let passo1 = Number(passo.value)
    /*------------------------------------------------ */
    if (inicio1 == 0 || fim1 == 0 || passo1 == 0){
        window.alert("[ERROR] Dados Inválidos")
    } else if (inicio1 < fim1){
        
        // Contagem CRESCENTE
        
        for (cont = inicio1 ; cont <= fim1 ; cont += passo1){
            res.innerHTML += `${cont} \u{1F449}`
        } 
    }else{
        
        // Contagem DECRESCENTE
        
        for (cont = inicio1 ; cont >= fim1 ; cont -= passo1){
            res.innerHTML += `${cont} \u{1F449}`
        }
    }   
    res.innerHTML += `\u{1F3C1}`    
}

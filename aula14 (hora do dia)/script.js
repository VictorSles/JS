/* MAIS UMA VEZ PODEMOS VER METODOS DE TRATAMENTOS DE DADOS ATRAVÉS DO COMANDO
"ID" */

function imagem(){
    var id1 = window.document.getElementById("msg")
    var id2 = window.document.getElementById("imagem")
    var data = new Date()
    var horadadata = data.getHours()
    msg.innerHTML = `Sao ${horadadata} horas`

    // AGORA QUE JA TRATAMOS OS DADOS ATRAVÉS DO COMANDO ID. VAMOS UTILIZAR O COMANDO "IF"
    // TAMBEM PODEMOS DEFINIR CARACTERISTICAS ESTICAS DO "IF", COMECANDO POR "DOCUMENT"    
    
    if (horadadata > 0 && horadadata <= 12){
        id2.src = `1.jpg`
        document.body.style.backgroundColor = "#e2cd9f"
        document.body.style.textAlign = "center"
    }else if(horadadata > 12 && horadadata <= 18){
        id2.src = `2.jpg`
        document.body.style.backgroundColor = "#b9846f"
        document.body.style.textAlign = "center"
    }else if(horadadata > 18 && horadadata <= 23.59){
        id2.src = `3.jpg`
        document.body.style.backgroundColor = "515154"
        document.body.style.textAlign = "center"
    }
}

// NOTE QUE TUDO ESTÁ DENTRO DA IDENTACAO DE "FUNCTION"
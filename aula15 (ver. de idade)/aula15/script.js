function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById (`txtano`)
    var res = document.getElementById (`res`)
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("VERIFIQUE E TENTE NOVAMENTE")
    }else{
        var dizersexo = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = `` 
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if (dizersexo[0].checked){                // AQUI POSSO VER COMO TODA VARIÁVEL COMECA COM UM VALOR 0                                               
            genero = `Homem`
            if (idade >= 0 && idade <= 10){
               //CRIANCA
               img.setAttribute(`src`, `1.jpg`)   // AQUI POSSO VER COMO COLOCAR IMAGEM EM JS
            }else if(idade > 18 && idade < 63){
                //ADULTO
                img.setAttribute(`src`, `2.jpg`)
            }else{
                //IDOSO
                img.setAttribute(`src`, `3.jpg`)
            }
        }else{
            (dizersexo[1].checked)
            genero = `Mulher`
            if (idade >= 0 && idade <= 10){
               //CRIANCA
               img.setAttribute(`src`, `a.jpg`)
            }else if(idade > 18 && idade < 63){
                //ADULTO
               img.setAttribute(`src`, `b.jpg`)
            }else{
                //IDOSO
                img.setAttribute(`src`, `c.jpg`)
            }
            }
            }res.innerHTML = `Sua idade é ${idade} anos, e seu genero é ${genero}`
            res.appendChild(img)                      // ESSE É O SCRIPT QUE FAZ APARECER A IMAGEM, TRATADA LOGO ACIMA
        }

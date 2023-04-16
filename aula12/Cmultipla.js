// SCRIPT  que usa o "switch" Ppara criar um programa que informa os dias da semana segundo o PC. lembrando que:
/*
DOMINGO = 0
SEGUNDA = 1
TERCA = 2 
QUARTA = 3
QUINTA = 4
SEXTA = 5
SABADO = 6
*/

var data1 = new Date()
var data2 = data1.getDate()
switch(data2) {
    case 0:
        console.log(`DOMINGO`)
        break
    case 1:
        console.log(`SEGUNDA`)
        break
    case 2:
        console.log(`TERCA`)
        break
    case 3:
        console.log(`QUARTA`)
        break
    case 4:
        console.log(`QUINTA`)
        break
    case 5:
        console.log(`SEXTA`)
        break
    case 6:
        console.log(`SABADO`)
        break
    default:
        console.log(`DIA INVALIDO`)
        break

}




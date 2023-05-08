// Há maneiras interessantes de manusear dados de objetos em JS
// Uma delas é entendendo a estrutura de formacao dos objetos, por exemplo
// Criar um script que descreva caracteristicas de algo, tudo dentro de uma
// mesma variável, e após isso podemos "chamar" essas caracteristicas
const carro = {
    marca: "Ford",
    modelo: "ka",
    Ano: 2015,
    placa: "ABC-1234",
    buzina: function () { alert("BIIIIIIIIIII") },
    completo: function () {
        return `A marca é ` + this.marca + ` e o modelo é ` + this.modelo
    }
}
    console.log(carro.completo());
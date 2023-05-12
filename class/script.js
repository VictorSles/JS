function salvar() {
    class Carro {
        constructor(valor1, valor2, valor3) {
            this.marca = valor1;
            this.modelo = valor2;
            this.ano = valor3;
        }
        buzina(){
            return this.modelo + "buzinou: BIIIIIIIIIIIIIIIII";
        }
    }

    // Aqui usamos a "fabrica" e suas ferramentas na construcao
    // De uma variável

    const uno = new Carro("Fiat", "Uno ", 2001);
    console.log(uno.buzina());
    uno.ano = 2014
    console.log(uno)
}
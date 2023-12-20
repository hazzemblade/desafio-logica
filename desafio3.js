class Heroi {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    realizarAtaque() {
        let tipoAtaque;

        switch (this.cargo) {
            case 'recruta':
                tipoAtaque = 'usou sua pistola';
                break;
            case 'soldado':
                tipoAtaque = 'avançou com seu rifle';
                break;
            case 'cabo':
                tipoAtaque = 'atacou com sua sub-metralhadora';
                break;
            case 'sargento':
                tipoAtaque = 'posicionou-se como sniper';
                break;
        }

        console.log(`${this.nome}, o ${this.cargo}, ${tipoAtaque}`);
    }
}
let recrutaJoao = new Heroi('João', 22, 'recruta');
let soldadoMaria = new Heroi('Maria', 28, 'soldado');

recrutaJoao.realizarAtaque();
soldadoMaria.realizarAtaque();

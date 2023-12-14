// Variáveis para armazenar informações sobre o herói
let nomeHeroi = "hazzemblade";
let xpHeroi = 5000;
let nivelHeroi;

// Lógica para determinar o nível do herói com base na experiência
if (xpHeroi < 1000) {
    nivelHeroi = "RECRUTA 1";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "SOLDADO";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "SOLDADO 2";
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
    nivelHeroi = "CABO";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "SARGENTO";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "SARGENTO 2";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "TENENTE";
} else {
    nivelHeroi = "CAPITÃO";
}

// Exibição do resultado no console
console.log(`O herói chamado ${nomeHeroi} está no nível ${nivelHeroi}.`);

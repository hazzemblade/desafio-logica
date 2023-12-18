function calcularRankeada(vitorias, derrotas) {
    var saldo = vitorias - derrotas;
    var nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldo: saldo, nivel: nivel };
}

// Exemplo de uso
var vitorias = parseInt(prompt("Informe o número de vitórias:"));
var derrotas = parseInt(prompt("Informe o número de derrotas:"));

var resultado = calcularRankeada(vitorias, derrotas);

console.log("O Herói tem saldo de " + resultado.saldo + " e está no nível de " + resultado.nivel);

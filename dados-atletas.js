/**
 * Classe Atleta
 * Responsável por armazenar os dados do atleta
 * e realizar todos os cálculos necessários
 */
class Atleta {

    /**
     * Construtor da classe
     * @param {string} nome - Nome do atleta
     * @param {number} idade - Idade do atleta
     * @param {number} peso - Peso do atleta em kg
     * @param {number} altura - Altura do atleta em metros
     * @param {Array<number>} notas - Notas recebidas pelo atleta
     */
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    /**
     * Calcula a categoria do atleta com base na idade
     * @returns {string}
     */
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    /**
     * Calcula o IMC do atleta
     * Fórmula: peso / (altura * altura)
     * @returns {number}
     */
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    /**
     * Calcula a média válida do atleta
     * Regra:
     * - Ordena as notas
     * - Remove a menor e a maior
     * - Calcula a média das notas restantes
     * @returns {number}
     */
    calculaMediaValida() {
        // Cria uma cópia do array para não alterar o original
        const notasOrdenadas = [...this.notas].sort((a, b) => a - b);

        // Remove a menor nota
        notasOrdenadas.shift();

        // Remove a maior nota
        notasOrdenadas.pop();

        // Soma as notas restantes
        const somaNotas = notasOrdenadas.reduce((soma, nota) => soma + nota, 0);

        // Calcula e retorna a média válida
        return somaNotas / notasOrdenadas.length;
    }

    // ===== Métodos de obtenção (getters manuais) =====

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemAlturaAtleta() {
        return this.altura;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}

/**
 * ============================
 * Exemplo de utilização
 * ============================
 */

// Declara o atleta conforme exemplo do enunciado
const atleta = new Atleta(
    "Cesar Abascal",
    30,
    80,
    1.70,
    [10, 9.34, 8.42, 10, 7.88]
);

// Exibe os dados no console exatamente como solicitado
console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta());
console.log("Altura:", atleta.obtemAlturaAtleta());
console.log("Notas:", atleta.obtemNotasAtleta().join(","));
console.log("Categoria:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC());
console.log("Média válida:", atleta.obtemMediaValida());

// 1) Observe o trecho de código abaixo:
let INDICE = 13,
    SOMA = 0,
    K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
console.log(SOMA);

//Ao final do processamento, qual será o valor da variável SOMA?
//Resposta:
//Ao final do processo o valor da variavel SOMA é: 91

//2 - sequência de Fibonacci
function verificaFibonacci(numero) {
    // Inicializa os dois primeiros números da sequência de Fibonacci
    let a = 0;
    let b = 1;

    // Verifica se o número informado é 0 ou 1, que são os dois primeiros números da sequência
    if (numero === a || numero === b) {
        return `${numero} pertence à sequência de Fibonacci.`;
    }

    // Inicia a sequência de Fibonacci a partir do terceiro número
    let proximoNumero = a + b;

    // Itera até o próximo número da sequência ser menor ou igual ao número informado
    while (proximoNumero <= numero) {
        // Se o próximo número for igual ao número informado, então pertence à sequência
        if (proximoNumero === numero) {
            return `${numero} pertence à sequência de Fibonacci.`;
        }

        // Atualiza os valores de a e b para os dois números anteriores
        a = b;
        b = proximoNumero;

        // Calcula o próximo número da sequência
        proximoNumero = a + b;
    }

    // Se o número informado não for encontrado na sequência, retorna uma mensagem informando isso
    return `${numero} não pertence à sequência de Fibonacci.`;
}

// Teste da função com um número específico
const numero = 21;
console.log(verificaFibonacci(numero)); // Saída: 21 pertence à sequência de Fibonacci.

/* 3 - Descubra a lógica e complete o próximo elemento:
RESPOSTA: O pŕoximo número da sequencia é 200 */

/* 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada
 em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar
 os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, 
qual interruptor controla cada lâmpada?

RESPOSTA: Ligue um dos interruptores e espere um pouco. Desligue e ligue um segundo interruptor.
 Vá até a sala. A lâmpada desligada e quente corresponde ao primeiro interruptor, 
 a lâmpada acesa ao segundo e a lâmpada apagada e fria ao terceiro.
*/

/* 5) Escreva um programa que inverta os caracteres de um string.
*/

function inverterString(str) {
    
    let caracteres = str.split('');
    let caracteresInvertidos = [];

    for (let i = caracteres.length - 1; i >= 0; i--) {
        
        caracteresInvertidos.push(caracteres[i]);
    }

    let stringInvertida = caracteresInvertidos.join('');

    
    return stringInvertida;
}

let minhaString = "Olá, mundo!";
let stringInvertida = inverterString(minhaString);
console.log(stringInvertida);

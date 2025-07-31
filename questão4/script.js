const input1 = document.getElementById("numero1");
const input2 = document.getElementById("numero2");
const select = document.getElementById("operacao-select");
const botaoCalc = document.getElementById("calcular-btn");
const resCalc = document.getElementById("resultado-calculadora");

addEventListener('click', () => {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    const operacao = select.value;

    let resposta = '';

    if (isNaN(num1) || isNaN(num2)) {
        resposta = "Por favor, insira números válidos.";
    } else {
        switch (operacao) {
            case '+':
                resposta = num1 + num2;
                break;
            case '-':
                resposta = num1 - num2;
                break;
            case '*':
                resposta = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    resposta = "Erro: Divisão por zero.";
                } else {
                    resposta = num1 / num2;
                }
                break;
            default:
                resposta = "Operação inválida.";
        }
    }
    resCalc.textContent = `resultado: ${resposta}`; // Corrigido para usar textContent em vez de innerHTML
    }
    );
function calculadora(){
    let numero1 = parseInt(prompt("Digite o primeiro número:"));
    let numero2 = parseInt(prompt("Digite o segundo número:"));
    let operacao = prompt("Digite a operação (+, -, *, /):");

    if(operacao === "+"){
        soma(numero1, numero2);
    } 
    let resultado
}


function soma (numero1, numero2){
   alert ("O resultado da soma é: " + (numero1 + numero2)); 
}
function subtracao (numero1, numero2){
   alert ("O resultado da subtração é: " - (numero1 - numero2)); 
}   
function multiplicacao (numero1, numero2){
    alert ("O resultado da multiplicação é: " * (numero1 * numero2));
}
function divisao (numero1, numero2){
    if (numero2 === 0) {
        return "Erro: Divisão por zero não é permitida.";
    }
    alert ("O resultado da divisão é: " / (numero1 / numero2));
}

calculadora();
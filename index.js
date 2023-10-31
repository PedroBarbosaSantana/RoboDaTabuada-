
const number = prompt("Olá, eu sou o Robô da tabuada!\n" +
"\nDigite o número que você deseja calcular a tabuada: ")

let Result = ""

for (let factor = 1; factor <= 20; factor++) {
    Result += " -> " + number +  " * " + factor + " = " + (number * factor) + "\n"
}

alert("Resultado da tabuada de " + number + ":\n\n" + Result)
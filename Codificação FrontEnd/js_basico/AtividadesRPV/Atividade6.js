let prompt = require("prompt-sync")();

let valor;

valor = parseInt(prompt("Digite o valor da tabuada: "));

while(valor<=0){
    valor = parseInt(prompt("O valor precisa ser maior que zero! digite outro valor: "))
}

for(i=1; i<=10; i++){
    console.log(i + " x " +valor + " = "+ i*valor);
}
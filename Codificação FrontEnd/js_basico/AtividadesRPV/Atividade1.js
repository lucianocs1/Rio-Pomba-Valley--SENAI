//Exercicio 12

let n1 = 10;
let n2 = 15;
let maior = n2; 

if (n2 > n1){
    console.log("O maior eh", maior);
}else{
        maior = n1;
        console.log("O maior eh", maior);
    }

console.log("");

//Exercicio 11

let feminino = "F";
let masculino = "M";

if (feminino == "F"){
    console.log("Feminino");
} else if (masculino == "M") {
    console.log("Masculino");
} else{ 
    console.log("S/S");
}

console.log("");

//Exercicio 10

let nota1 = "10";
let nota2 = "12";
let media = 15;

if (media >= 10){
    console.log("Aprovado com Distinção");
}else if (media >= 7){
        console.log("Aprovado");
}  
       else{
        console.log("Reprovado");
       }

console.log(""); 

// Exercicio 1

let nome = "Luciano";
let idade = 29;

console.log("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos");

console.log("");

// Exercicio 2

let numero1 = 30;
let numero2 = 40;

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2; 

console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log("Divisão: " + divisao);

console.log("");

// Exercicio 3

let idade1 = 29;

if (idade1 >= 18) {
    console.log("Maior de idade.");
} else {
    console.log("Menor de idade.");
}

console.log("");

// Exercicio 4

let numero11 = 10;
let numero22 = 20;
let numero33 = 50;
let media4 = (numero11 + numero22 + numero33) / 3;
console.log("A média aritmética é: " + media4);

console.log("");

//Exercicio 5

let nome5 = 'Luciano F';
let salarioAtual = 2000;
let aumento = 0.1;
let novoSalario = (salarioAtual * aumento) + salarioAtual;
console.log("O novo salário de " + nome5 + " é: R$ " + novoSalario);

console.log("");

//Exercicio 6

let a6 = 10;
let b6 = 11;

if (a6 === b6) {
    let c6 = a6 + b6;
    console.log("Os valores são iguais. A soma de A e B é: " + c6);
} else {
    let c6 = a6 * b6;
    console.log("Os valores são diferentes. A multiplicação de A por B é: " + c6);
}

console.log("");

//Exercicio 7

let precoAVista = 2000;
let numeroParcelas = 5;

    if (numeroParcelas !== 3 && numeroParcelas !== 5) {
        console.log("Número de parcelas inválido. O programa aceita apenas 3 ou 5 parcelas.");
    } else {
        let acrescimo = 0;
        if (numeroParcelas === 3) {
            acrescimo = 0.1;
        } else if (numeroParcelas === 5) {
            acrescimo = 0.2;
        }
        let precoTotal = precoAVista * (1 + acrescimo);

        let valorPrestacao = precoTotal / numeroParcelas;

        console.log("Preço total a pagar: R$ " + precoTotal);
        console.log("Valor da prestação mensal: R$ " + valorPrestacao);
    }

    console.log("");

    //Exercicio 8

    let nomeAluno = 'Luciano C S Filho';
    let nota11 = 8;
    let nota22 = 6;
    let nota33 = 9;
    let media8 = (nota11 + nota22 + nota33) / 3;

    console.log("Nome do aluno: " + nomeAluno);
    console.log("Média: " + media8);

    if (media8 >= 8) {
        console.log("Situação: Aprovado");
    } else {
        console.log("Situação: Reprovado");
    }

    console.log("");

     //Exercicio 9

    let numero18 = 25;
    let numero28 = 10;
    let codigo1 = 3;

    if (codigo1 === 1){
        console.log(numero18);
        console.log(numero28);
    } else if (codigo1 === 2){
        let multi = numero18 * numero28;
        console.log("A multiplicação é: "+ multi);
 }  else if (codigo1 === 3){
    let div = numero18 / numero28;
    console.log("A divisão é: "+ div);
 }



    


       
    



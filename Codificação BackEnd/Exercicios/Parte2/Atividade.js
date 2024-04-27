const { resourceLimits } = require('worker_threads');

const prompt = require('prompt-sync')();


// Atividade - 1 
// for(let i = 0; i <= 50; i++){
//     let teste = i%2
//     if(i > 30){
//         break;
//     }else if(teste ==1){
//         console.log(`Valor impar ${i}`)
//     }
// }



// Atividade - 2 
// for(let i = 0; i <= 50; i++){
//     let teste = i%2
//     if(i == 30){
//         continue;
//     }else if(teste ==0){
//         console.log(`Valor impar ${i}`)
//     }
// }


/*Atividade - 3*

let numero = parseInt(prompt('Digite um número: '));
let parOuImpar= numero%2;
if(parOuImpar == 0){
    console.log(`${numero} é um número par.`)
}else{
    console.log(`${numero} é um número impar.`)
}*/


//Atividade - 4
/*
let a = parseInt(prompt(`Digite um valor: `));
if(a != 0){
    let result = a;
    let multi = `${a}! = ${a} x `;
    a--;

    for (a; a > 0 ; a--){
        if(a != 1){
        result = result * a;
        multi += `${a} x `;
        }else{
            result = result * a;
            multi += `${a} `;
        }
    }
    multi += `= ${result}`;
    console.log(multi);
}else{
    console.log(`${a}! = 1`);
}
*/
/* Atividade - 5 
let result = "Numeros entre 1 e 100 são: "
for(let i = 0; i <= 100; i++){
    let teste = i%3
    if(teste == 0){
        result += i + " "
    }
}
console.log(result)*/

/* Atividade - 6 

let a = parseInt(prompt(`Digite primeiro valor: `));
let b = parseInt(prompt(`Digite segundo valor: `));
let c = parseInt(prompt(`Digite terceiro valor: `));
let lista= [a , b, c]
lista.sort((a,b) => a-b);
console.log( "Crescente: " + lista)
lista.sort((a,b) => b-a);
console.log("Decrecente: " +lista)*/



//  Atividade - 7

// let a = parseInt(prompt(`Digite primeiro valor: `));
// let b = parseInt(prompt(`Digite segundo valor: `));
// let c =0
// if( a ==b){
//     c = a + b;
// }else{
//     c = a * b;
// }

// console.log("resultado é " + c);


// Atividade - 8
/*
let nome = prompt(`Digite o nome: `);
let matricula = parseInt(prompt(`Digite a matrícula: `));
let disciplicna = prompt(`Digite a disciplina: `);
let nota = parseInt(prompt(`Digite a nota: `));

if(nota >=60){
    console.log('Aprovado')
}else if(nota >=50){
    console.log('Recuperação')
}else{
    console.log('Reprovado')
}*/


// Atividade - 9
/*
let idadeMedia = 0;
let maiorIdade = 0;
let menorIdade= 0;
let maior20 = 0;
let menor10 = 0;


for(let i = 0; i < 10; i++){
    let idade = parseInt(prompt('Digite a idade: '));
    if(idade > 20){
        maior20++
    }
    if(idade < 10){
        menor10++
    }
    if(maiorIdade < idade ){
        maiorIdade = idade;
    }
    if(menorIdade < idade || menorIdade != 0){
        menorIdade = idade;
    }
    idadeMedia+= idade
}
idadeMedia= idadeMedia/10
console.log(`A idade medida é de: ${idadeMedia}. A maior idade digitada foi: ${maiorIdade}.A menor idade digitada foi ${menorIdade}`)
console.log(`Teve ${maior20} maior de 20 e ${menor10} menor de 10 anos`)*/


//  Atividade - 10

// let largura = parseInt(prompt("Digite a largura: "));
// let comprimento = parseInt(prompt("Digite o comprimento: "));
// let area = 0;

// area = largura * comprimento;

// console.log(`A area é ${area}m²`);

// if (area < 100){
//     console.log(`Terreno Popular.`);
// } else if (area >= 100 && area < 500){
//     console.log(`Terreno Master.`);
// } else {
//     console.log(`Terreno VIP.`)
// }


//  Atividade - 11

// function calcularPagamento(preco, codigoPagamento) {
//     if (codigoPagamento === 1) {
//         return preco * 0.9; //
//     } else if (codigoPagamento === 2) {
//         return preco * 0.85;
//     } else if (codigoPagamento === 3) {
//         return preco;
//     } else if (codigoPagamento === 4) {
//         return preco * 1.1;
//     } else {
//         console.log("Código de pagamento inválido.");
//         return null;
//     }
// }

// function main() {
//     const preco = parseFloat(prompt("Digite o preço do produto: "));
//     const codigoPagamento = parseInt(prompt("Digite o código da condição de pagamento: "));

//     const precoFinal = calcularPagamento(preco, codigoPagamento);
//     if (precoFinal !== null) {
//         console.log(`O valor a ser pago é: R$${precoFinal.toFixed(2)}`);
//     }
// }

// main();



//  Atividade - 12

// let altura = parseFloat(prompt(`Digite sua altura: `));
// let sexo = prompt(`Digite seu sexo: `);
// let imcH = 0;
// let imcM = 0;

// imcH = (72.7 * altura) - 58;
// imcM = (62.1 * altura) - 44.7;

// if (sexo === 'M'){
//     console.log(`Seu peso ideal é: ${imcH}`);
// } else {
//     console.log(`Seu peso ideal é: ${imcM}`);
// }


//  Atividade - 13

// function soma(numero1, numero2) {
//     return numero1 + numero2;
// }

// function subtracao(numero1, numero2) {
//     return numero1 - numero2;
// }

// function multiplicacao(numero1, numero2) {
//     return numero1 * numero2;
// }

// function divisao(numero1, numero2) {
//     if (numero2 === 0) {
//         console.log("Erro: divisão por zero.");
//         return null;
//     } else {
//         return numero1 / numero2;
//     }
// }

// function main() {
//     const numero1 = parseFloat(prompt("Digite o primeiro número: "));
//     const numero2 = parseFloat(prompt("Digite o segundo número: "));

//     const operacao = prompt("Escolha a operação: \n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão");

//     let resultado;
//     switch (operacao) {
//         case "1":
//             resultado = soma(numero1, numero2);
//             console.log(`Resultado da soma: ${resultado}`);
//             break;
//         case "2":
//             resultado = subtracao(numero1, numero2);
//             console.log(`Resultado da subtração: ${resultado}`);
//             break;
//         case "3":
//             resultado = multiplicacao(numero1, numero2);
//             console.log(`Resultado da multiplicação: ${resultado}`);
//             break;
//         case "4":
//             resultado = divisao(numero1, numero2);
//             if (resultado !== null) {
//                 console.log(`Resultado da divisão: ${resultado}`);
//             }
//             break;
//         default:
//             console.log("Operação inválida.");
//     }
// }

// main();


//  Atividade - 14

// function calcularIMC(peso, altura) {
//     return peso / (altura * altura);
// }

// function classificarIMC(imc) {
//     if (imc < 18.5) {
//         return "Abaixo do Peso";
//     } else if (imc >= 18.5 && imc < 24.9) {
//         return "Peso Ideal";
//     } else if (imc >= 25 && imc < 29.9) {
//         return "Excesso de Peso";
//     } else {
//         return "Obesidade";
//     }
// }

// function main() {
//     const peso = parseFloat(prompt("Digite o peso em kg: "));
//     const altura = parseFloat(prompt("Digite a altura em metros: "));

//     const imc = calcularIMC(peso, altura);
//     console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    
//     const classificacao = classificarIMC(imc);
//     console.log(`Classificação: ${classificacao}`);
// }

// main();


//  Atividade - 15

// function calcularNotas(valor) {
//     const notasDisponiveis = [100, 50, 20, 10, 5, 2, 1];
//     let notas = {};

//     for (let nota of notasDisponiveis) {
//         const qtdNotas = Math.floor(valor / nota);
//         if (qtdNotas > 0) {
//             notas[nota] = qtdNotas;
//             valor -= qtdNotas * nota;
//         }
//     }

//     return notas;
// }

// function main() {
//     let valor = parseInt(prompt("Digite o valor do saque (sem casas decimais): "));

//     if (isNaN(valor) || valor <= 0) {
//         console.log("Valor inválido.");
//         return;
//     }

//     const notas = calcularNotas(valor);

//     console.log("Distribuição das notas:");
//     for (let nota in notas) {
//         console.log(`R$${nota},00: ${notas[nota]} nota(s)`);
//     }
// }

// main();

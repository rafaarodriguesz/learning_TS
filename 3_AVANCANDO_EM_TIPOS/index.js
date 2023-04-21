"use strict";
// 1 - arrays
let number = [1, 2, 3, 4];
number.push(5);
console.log(number[2]);
const nome = ["Joao", "mairia", "josé"];
nome.push("Joao");
//2 - sintaxe diferente
const nums = [100, 200, 300];
nums.push(300);
console.log(nums);
// nums.push("teste")
console.log(nums[0]);
// 3 - any qualquer tipo satisfaz
const arr1 = [1, "teste", true, []];
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 tipo de parametro em funçoes
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma("a" , "b")
// 5 tipos de retorno de funçoes 
function greeting(name) {
    return `olá ${name}`;
}
console.log(greeting("rafael"));
// 6 funcao anonima
setTimeout(function () {
    const sallary = 1000;
    //console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 tipos em objetos
function passCordinates(cord) {
    console.log("X cordenada " + cord.x);
    console.log("Y cordenada " + cord.y);
}
const objCord = { x: 329, y: 84.3 };
passCordinates(objCord);
// passCordinates({nome: 1 , sobrenome: 2})
const pessoaObj = { nome: "rafael", surname: "alonso" };
// 9 opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    if (b) {
        console.log("b: " + b);
    }
    if (c) {
        console.log("c: " + c);
    }
}
showNumbers(12143, 2123);
showNumbers(123);
// 9 validando argumentos opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return (`Olá  ${firstName} ${lastName}, tudo bem?`);
    }
    return (`Olá, ${firstName}, tudo bem?`);
}
console.log(advancedGreeting("Rafael", "Rodrigues"));
console.log(advancedGreeting("Rafael"));
// 10 - Union Type
function showBalance(balance) {
    console.log(`O saldo da conta é R$ ${balance}`);
}
showBalance(100);
showBalance('500');
// showBalance(true)

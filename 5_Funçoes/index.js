"use strict";
// 1 - void
function noReturn() {
    console.log("não recebe retorno");
}
noReturn();
// 2 - Callback Como argumento
function greeting(name) {
    return (`Olá ${name}`);
}
function preGreeting(f, userName) {
    console.log("Preparando");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Rafael");
// 3 - generic function
function functionArray(arr) {
    console.log(arr[0]);
}
const array = ["idsofj", "sduifh", "hdsifu"];
const number = [134, 324213, 4213];
functionArray(array);
functionArray(number);
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjects({ name: "Rafael" }, { age: 16, job: "Programer" });
console.log(newObject);
console.log(array);
// 4 constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("5", "3"));
// console.log(biggestNumber("5",3));
// 5 - especificar tipo de argumento
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArray([1, 2, 3], [5, 6]));
console.log(mergeArray([1, 2, 3, 4], ["teste", "hjdfoi"]));
// 6 parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("rafa"));
console.log(modernGreeting("rafa", "lindo"));
// 7 parametros default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(12));
console.log(somaDefault(12, 324));
// 8 unknown (parecido com o any)
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um numero");
    }
}
doSomething([432, 1234, 543]);
doSomething(2354435);
// 9 never (parecido com o void)
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("bruno é um erro")
// 10 Rest parameters
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 3, 4, 5));
console.log(sumAll(3, 6, 5, 6, 7));
// Destructuring
// 11 destructuring
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name}, e ele custa R$${price}`;
}
const shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));

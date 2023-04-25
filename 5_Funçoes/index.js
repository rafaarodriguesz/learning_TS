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

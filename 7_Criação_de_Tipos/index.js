"use strict";
// 1 - generics (qualquer dado)
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData(5));
console.log(showData("Rafael"));
// 2 - Constraint Generics (limita os tipos aceitos)
function showProductName(obj) {
    return `O nome do porduto é ${obj.name}`;
}
const myObj = { name: "Rafael", cor: "branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
console.log(showProductName({ myObj }));
console.log(showProductName({ otherProduct }));
const myCar = { name: "fusca", wheels: 4, engine: 1.0 };
const myPen = { name: "monblanc", wheels: true, engine: true };
console.log(myCar);
console.log(myPen);
// 4 Type Parameters
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem valor de ${obj[key]}`;
}
const server = {
    hd: "2tb",
    ram: "32gb"
};
console.log(getSomeKey(server, "ram"));
function showCharacterName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Matheus",
    age: 30,
    hasDriverlicense: true
};
console.log(showCharacterName(myChar, "age"));
// 6 - type Of Type Operator 
const userName = "matheus";
const userName2 = "Jao";
const userName4 = "Joao";
const newTruck = {
    km: 1000,
    kg: 5000,
    description: "Caminhao para pouca carga"
};
function showKm(km) {
    console.log(`O veiculo tem o km de ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 3000,
    description: "o caminhao para muita carga"
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";

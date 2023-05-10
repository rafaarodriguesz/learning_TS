"use strict";
// 1 - Tipo de objeto para funçao com interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é ${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponivel");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "tenis", price: 123.33, isAvailable: true });
function showUserDetails(user) {
    console.log(`O usuario tem o email ${user.email}`);
    if (user.role) {
        console.log(`A função do usuario é ${user.role}`);
    }
}
const u1 = { email: "rafael@gmail.com", role: "Admin", };
const u2 = { email: "aroi@gamail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    whelss: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const rafael = {
    name: "rafael",
    age: 16,
};
console.log(rafael);
const Goku = {
    name: "goku",
    age: 30,
    superpower: ["dshfi", "disojf", "edhfoid"]
};
console.log(Goku);
const arold = {
    name: "Arold",
    type: "Shot gun",
    caliber: 12
};
console.log(arold);
console.log(arold.caliber);
// 7 readonly array 
let myArray = ["maça", "pera", "banana"];
console.log(myArray);
myArray.forEach((item) => {
    console.log("fruta " + item);
});
myArray = myArray.map((item) => {
    return `Fruta ${item}`;
});
console.log(myArray);
const myFiveNumbers = [1, 2, 3, 4, 5];
console.log(myFiveNumbers);
const anotherUser = ["Matheus", 30];
console.log(anotherUser[0]);
anotherUser[0] = "Joao";
// anotherUser[1] = "teste"
// 9 tuplas com readOnly
function showNumbers(numbers) {
    //number[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);

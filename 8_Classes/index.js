"use strict";
// 1 - Campos em classes ! = sem valor inicial
class User {
}
const matheus = new User();
console.log(matheus);
matheus.name = "matheus";
matheus.age = 16;
// matheus.job = "programmer"
console.log(matheus);
// 2 constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const rafa = new NewUser("Rafael", 16);
console.log(rafa);
// 3 campos readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("fusca");
console.log(fusca.wheels);
console.log(fusca.name);
fusca.name = "fusca Turbo";
// fusca.whells = 5
// 4 Herança e Super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroier", 4);
console.log(trator);
console.log(destroyer);
class Tn {
    constructor(name, bobles) {
        this.name = name;
        this.bobles = bobles;
    }
}
const sherbet = new Tn("Sherbet", 6);
class priceTn extends Tn {
    constructor(name, bobles, price) {
        super(name, bobles);
        this.price = price;
    }
}
const priceTnSherbet = new priceTn("Sherbet", 8, 700);
console.log(priceTnSherbet);
console.log(sherbet);
// 5 métodos 
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey! stranger!");
    }
}
const Jimi = new Dwarf("Jimi");
console.log(Jimi.name);
Jimi.greeting();
// 6 THIS
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`O caminhao modelo ${this.model}, que tem ${this.hp}`);
    }
}
const volvo = new Truck("volvo", 400);
volvo.showDetails();

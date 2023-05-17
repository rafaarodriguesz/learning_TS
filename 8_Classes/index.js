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
// 7 Getters (retorna propiedade)(pode ser usado como propiedade)
class Person {
    constructor(name, surName) {
        this.name = name;
        this.surName = surName;
    }
    get fullName() {
        return this.name + " " + this.surName;
    }
}
const matheusBatist = new Person("matheus", "batist");
console.log(matheusBatist.name);
console.log(matheusBatist.fullName);
// 8 Setters
class Coords {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com Sucesso");
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("y inserido com Sucesso");
    }
    get getCoords() {
        return `X = ${this.x} Y = ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillx = 15;
myCoords.filly = 0;
myCoords.filly = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do Post é ${this.title}`;
    }
}
const myPost = new blogPost("Hello world");
console.log(myPost.itemTitle());
class testInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo é ${this.title}`;
    }
}
// 10 overide de métodos (substitui o outro método (só ter o mesmo nome)) 
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class nova extends Base {
    someMethod() {
        console.log("outra coisa");
    }
}
const myObject = new nova;
myObject.someMethod();

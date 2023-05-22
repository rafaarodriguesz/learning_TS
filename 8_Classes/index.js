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
// 11 public (não muda muita coisa)
class c {
    constructor() {
        this.x = 10;
    }
}
class d extends c {
}
const cInstance = new c();
console.log(cInstance.x);
const dInstance = new d();
console.log(dInstance.x);
// 12 protected
class E {
    constructor() {
        this.x = 10;
    }
}
class F extends E {
    show() {
        console.log("x: " + this.x);
    }
}
const fInstance = new F;
// console.log(fInstance.x)
fInstance.show();
// 13 private (nivel maximo de proteção)
class PrivateClass {
    constructor() {
        this.name = "private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("método privado");
    }
    showName2() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName());
// console.log(pObj.name)
pObj.showName2();
// class TestPrivate extends PrivateClass{
//     myMethod(){
//         this.privateMethod()
//     }
// }
// 14 static menbers (colocar pre valores) sem usar o constructor
class StaticMenbers {
    static staticMethod() {
        console.log("este é um metodo estático");
    }
}
StaticMenbers.prop = "teste static";
console.log(StaticMenbers.prop);
StaticMenbers.staticMethod();
// 15 Generic class (generic vai aceitar qualquer coisa)
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem);
console.log(newItem.showFirst);
// 16 parameters properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `Qty total ${this.price}`;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 6);
console.log(newShirt.name);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
// 17 class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Joanes");
console.log(pessoa);
console.log(pessoa.name);
// 18 Abstract class (tipo um molde)
class abstractclass {
}
//const newObj = new abstractclass();
class AbstractExemple extends abstractclass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newAbstractObj = new AbstractExemple("marcelu");
newAbstractObj.showName();
// 19 relaçao entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 exemplo de decorator
function myDecorator() {
    console.log("iniciando Decorator");
    return function (target, propertKey, descriptor) {
        console.log("executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("Terminando execuçao do método");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
// 2 multiplos decorators (executa o mais a baixo)
function a() {
    return function (target, propertKey, descriptor) {
        console.log("executou a");
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log("executou b");
    };
}
class MultiplesDecorators {
    testing() {
        console.log("terminando a execução");
    }
}
__decorate([
    a(),
    b()
], MultiplesDecorators.prototype, "testing", null);
const multiple = new MultiplesDecorators();
multiple.testing();
// 3 class decorator
function classDec(constructor) {
    console.log(constructor.name);
    if (constructor.name === "User") {
        console.log("Criando Usuario");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const matheus = new User("Matheus");
console.log(matheus);
// 4 method decorator
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `O nome da marca é ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");

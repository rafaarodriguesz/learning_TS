// 1 importção de arquivos
import importGreet from "./greet.js"

importGreet()

// 2 importar variaveis

import {x} from "./variavle.js"

console.log(x)

// 3 multiplas importações 
import {a, b, myFunction } from "./multiple.js"

console.log(a)
console.log(b) 

myFunction();

// 4 alias

import { someName as name } from "./changeName.js"

console.log(name);

// 5 importar tudo
import * as myNumbers from "./numbers.js"

const n3 = myNumbers.n3

console.log(myNumbers)
console.log(n3)

// 6 importar tipos 
import {Human} from "./mytype"

class User implements Human{
    name
    age

    constructor(name: string, age: number){
    this.name = name;
    this.age = age;
    }
}

const joao = new User ("João", 25)

console.log(joao)


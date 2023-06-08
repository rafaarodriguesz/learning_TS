// 1 exemplo de decorator
function myDecorator(){
    console.log("iniciando Decorator");

    return function(target: any, propertKey: string, descriptor: PropertyDescriptor ){
        console.log("executando decorator")
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)
    }
}

class myClass {
    @myDecorator()
    testing(){
        console.log("Terminando execuçao do método")
    }
}

const myObj = new myClass()

myObj.testing();

// 2 multiplos decorators (executa o mais a baixo)

function a(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("executou a")
    }
}
function b(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("executou b")
    }
}

class MultiplesDecorators {
    @a()
    @b()
    testing(){
        console.log("terminando a execução")
    }
}

const multiple = new MultiplesDecorators()

multiple.testing()

// 3 class decorator
function classDec(constructor: Function){
    console.log(constructor.name);
    if(constructor.name === "User"){
        console.log("Criando Usuario")
    }

}

@classDec
class User{
    name

    constructor(name: string){
        this.name = name
    }
}

const matheus = new User("Matheus")

console.log(matheus)

// 4 method decorator
function enumerable(value: boolean){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        descriptor.enumerable = value
    }
}

class Machine{
    name 

    constructor(name: string){
        this.name = name
    }

    @enumerable(false)
    showName(){
        return `O nome da marca é ${this.name}`
    }
}

const trator = new Machine("Trator")

// 5 acessor decorator
class Monster{
    name?
    age?

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName(){
        return `nome do monstro ${this.name}`
    }

    @enumerable(false)
    get showAge(){
        return `Idade do Monstro ${this.age}`
    }
}

const charmander = new Monster("Charmander", 13);

console.log(charmander);

// 6 property decorator
// 1 - 00001
function formatNumber{
    return function(target: Object, propertKey: string){

        let value: string

        const getter = function(){
            return value
        }

        const setter = function(newVal: string){
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        })
    }
}

class ID {
    @formatNumber()
    id 

    constructor(id: string){
        this.id = id
    }
}

const newItem = new ID("1")

console.log(newItem)
console.log(newItem.id)

// 7 exemplo real com class decorator 
function createdDate(created: Function){
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id
    createdAt?: Date

    constructor(id: number){
        this.id = id
    }
}

@createdDate
class Pen {
    id

    constructor(id: number){
        this.id = id
    }
}

const newBook = new Book(12)
const pen = new Pen(55)

console.log(newBook)
console.log(pen)
console.log(newBook.createdAt)

// 8 exemplo real method decorator
function checkIfUserPost(){
    return function(
        target: Object, 
        key: string | Symbol, 
        descriptor: PropertyDescriptor
        ){
            const childFunction = descriptor.value;
            console.log(childFunction);
            descriptor.value = function (... args: any[]){
                if(args[1] === true){
                    console.log("usuario já postou")
                    return null
                }else{
                    return childFunction.apply(this, args)
                }
            }
            return descriptor
    }
}

class Post{
    alreadyPosted = false

    post(content: string, alreadyPosted: boolean){
        this.alreadyPosted = true
        console.log(`Post do Usuario: ${content}`)
    }
}

const newPost = new Post()

newPost.post("Meu primeiro Post", newPost.alreadyPosted);
newPost.post("Meu primeiro Post", newPost.alreadyPosted);

// 9 exeplo real PropertyDecorator
function Max(limit:number){
    return function(target: Object, propertyKey:string){
        let value: string

        const getter = function(){
            return value
        }

        const setter = function(newVal: string){
            if(newVal.length > limit){
                console.log(`O valor deve ser no maximo ${limit} digitos`)
                return
            } else{
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey,{
            get: getter,
            set:setter,
        })
    }
}

class Adimin{
    userName;

    constructor(userName: string){
        this.userName = userName
    }
}

let Pedro = new Adimin("pedrin123")
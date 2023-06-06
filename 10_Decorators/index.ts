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
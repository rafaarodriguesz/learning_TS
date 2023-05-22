// 1 - Campos em classes ! = sem valor inicial

class User{
    name!: string;
    age!: number
}

const matheus = new User()

console.log(matheus)

matheus.name = "matheus"
matheus.age = 16
// matheus.job = "programmer"

console.log(matheus)

// 2 constructor

class NewUser {
    name
    age

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

const rafa = new NewUser("Rafael", 16)

console.log(rafa)

// 3 campos readonly

class Car{
    name 
    readonly wheels = 4

    constructor(name: string){
        this.name = name
    }
}

const fusca = new Car("fusca")

console.log(fusca.wheels)
console.log(fusca.name)

fusca.name = "fusca Turbo"

// fusca.whells = 5

// 4 Herança e Super
class Machine {
    name 

    constructor(name: string ){
        this.name = name
    }
}

const trator = new Machine("trator")

class KillerMachine extends Machine {
    guns 

    constructor (name: string, guns: number ){
        super(name)
        this.guns = guns 
    }
}

const destroyer = new KillerMachine("Destroier", 4)

console.log(trator)

console.log(destroyer)

class Tn {
    name
    bobles

    constructor(name: string, bobles: number){
        this.name = name 
        this.bobles = bobles
    }
}

const sherbet =  new Tn("Sherbet", 6)

class priceTn extends Tn{
    price

    constructor(name: string, bobles: number, price: number){
        super(name, bobles)
        this.price = price
    }
}

const priceTnSherbet = new priceTn("Sherbet", 8, 700)

console.log(priceTnSherbet)
console.log(sherbet)

// 5 métodos 

class Dwarf {
    name 

    constructor(name: string){
        this.name = name 
    }

    greeting(){
        console.log("Hey! stranger!")
    }
}

const Jimi = new Dwarf("Jimi")

console.log(Jimi.name)

Jimi.greeting()

// 6 THIS

class Truck {
    model
    hp 

    constructor(model: string, hp: number){
        this.model = model
        this.hp = hp
    }

    showDetails(){
        console.log(`O caminhao modelo ${this.model}, que tem ${this.hp}`)
    }
}

const volvo = new Truck("volvo", 400)

volvo.showDetails()

// 7 Getters (retorna propiedade)(pode ser usado como propiedade)

class Person {
    name 
    surName

    constructor(name: string, surName: string){
        this.name = name
        this.surName = surName
    }

    get fullName(){
        return this.name + " " + this.surName
    }
}

const matheusBatist = new Person("matheus", "batist")

console.log(matheusBatist.name)
console.log(matheusBatist.fullName)

// 8 Setters

class Coords{
    x!: number
    y!: number

    set fillx(x: number){
        if(x === 0){
            return
        }

        this.x = x

        console.log("X inserido com Sucesso")
    }

    set filly(y: number){
        if(y === 0){
            return
        }

        this.y = y

        console.log("y inserido com Sucesso")
    }

    get getCoords(){
        return `X = ${this.x} Y = ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillx = 15
myCoords.filly = 0
myCoords.filly = 10


console.log(myCoords)
console.log(myCoords.getCoords)

// 9 implements 

interface showTitle{
    itemTitle(): string
}

class blogPost implements showTitle {
    title 

    constructor(title: string){
        this.title = title 
    }

    itemTitle(){
        return `O titulo do Post é ${this.title}`
    }

}

const myPost = new blogPost("Hello world")

console.log(myPost.itemTitle())

class testInterface implements showTitle{

    title 

    constructor(title: string){
        this.title = title 
    }

    itemTitle(){
        return `O titulo é ${this.title}`
    }

}

// 10 overide de métodos (substitui o outro método (só ter o mesmo nome)) 

class Base {
    someMethod(){
        console.log("Alguma coisa")
    }
}

class nova extends Base {
 someMethod(): void {
     console.log("outra coisa")
 }
}

const myObject = new nova

myObject.someMethod()

// 11 public (não muda muita coisa)

class c{
   public x = 10
}

class d extends c {

}

const cInstance = new c()

console.log(cInstance.x)

const dInstance = new d()

console.log(dInstance.x)

// 12 protected

class E {
    protected x = 10
}

class F extends E {
    show(){
        console.log("x: " + this.x)
    }
}

const fInstance = new F
// console.log(fInstance.x)
fInstance.show()

// 13 private (nivel maximo de proteção)

class PrivateClass{
    private name = "private"

    showName(){
        return this.name
    }

    private privateMethod(){
        console.log("método privado")
    }

    showName2(){
    this.privateMethod()
    }
}

const pObj = new PrivateClass()
console.log(pObj.showName())
// console.log(pObj.name)
pObj.showName2()

// class TestPrivate extends PrivateClass{
//     myMethod(){
//         this.privateMethod()
//     }
// }

// 14 static menbers (colocar pre valores) sem usar o constructor

class StaticMenbers {
    static prop = "teste static"

    static staticMethod(){
        console.log("este é um metodo estático") 
    }
}


console.log(StaticMenbers.prop)

StaticMenbers.staticMethod()

// 15 Generic class (generic vai aceitar qualquer coisa)
class Item<T,U >{
    first
    second

    constructor(first: T, second: U){
        this.first = first
        this.second = second
    }

    get showFirst(){
        return `O first é: ${this.first}`
    }
}

const newItem = new Item ("caixa", "surpresa")

console.log(newItem)
console.log(newItem.showFirst)

// 16 parameters properties
class ParameterProperties{
    constructor(public name: string, private qty: number, private price: number){
        this.name = name 
        this.qty = qty
        this.price = price
    }

    get showQty(){
        return `Qtd total: ${this.qty}`
    }

    get showPrice(){
        return `Qty total ${this.price}`
    }
}

const newShirt = new ParameterProperties("Camisa",5,6)

console.log(newShirt.name)
console.log(newShirt.showPrice)
console.log(newShirt.showQty)

// 17 class expressions

const myClass = class<T>{
    name 

    constructor(name: T){
        this.name = name 
    }
}

const pessoa = new myClass("Joanes")

console.log(pessoa)

console.log(pessoa.name)

// 18 Abstract class (tipo um molde)

abstract class abstractclass {
    abstract showName():void;
}

//const newObj = new abstractclass();

class AbstractExemple extends abstractclass{
    name: string
    
    constructor(name: string){
        super()
        this.name = name;
    }

    showName(){
        console.log(`O nome é: ${this.name}`)
    }
}

const newAbstractObj = new AbstractExemple("marcelu");

newAbstractObj.showName();

// 19 relaçao entre classes

class Dog{
    name!: string
}

class Cat {
    name!: string
}

const doguinho: Dog = new Cat()

console.log(doguinho)
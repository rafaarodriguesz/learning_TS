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


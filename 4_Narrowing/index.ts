// 1 - type guard

function sum(a: number | string, b:number | string){
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    }
    else if(typeof a === "number" && typeof b === "number"){
        console.log(a + b)
    }
    else{
        console.log("impossivel executar a soma")
    }
    
}

sum("10", "5")
sum("10", 5)
sum(10, "5")
sum(10 , 5)

// 2 checando se o valor existe

function operations(arr: number[], operation: string | undefined){
    if(operation){
        if(operation === "sum"){
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        }else if(operation === "multiply"){
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }
    }
    else{
        console.log("porfavor, defina uma operação")
    }
}

operations([1,2,3], "sum")
operations([1,2,10],"multiply")


// 3 instance of

class User{
    name

    constructor(name: string){
        this.name = name
    }
}

class superUser extends User {
    constructor(name: string){
        super(name)
    }
}

const jhon = new User("Jhon")
const paul = new superUser("Paul")

console.log(paul)
console.log(jhon)

function userGreeting(user: object){
    if(user instanceof superUser){
        console.log(`Olá ${user.name} deseja ver os dados do sistema?`)
    }else if (user instanceof User){
        console.log(`Olá ${user.name}`)
    }
} 

userGreeting(jhon)
userGreeting(paul)

// 4 Operador in

 class Dog {
    name
    breed

    constructor(name: string, breed?: string){
        this.name = name 
        if(breed){
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pastor Alemao")

function showDogDetails(dog: Dog){
    
    if("breed" in dog){
        console.log(`O cachorro é da raça ${dog.breed}`)
    }else{
        console.log("O cachorro é um SRD")
    }
}

showDogDetails(turca)
showDogDetails(bob)
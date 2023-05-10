// 1 - Tipo de objeto para funçao com interface

interface Product {
    name:string
    price: number
    isAvailable: true
}

function showProductDetails(product: Product){
    console.log(`O nome do produto é ${product.name} e seu preço é ${product.price}`)
    if(product.isAvailable){
        console.log("O produto está disponivel")
    }
}

const shirt:Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name:"tenis", price: 123.33, isAvailable: true})

// 2 - ´propiedade opcional em interface

interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User){
    console.log(`O usuario tem o email ${user.email}`)

    if(user.role){
        console.log(`A função do usuario é ${user.role}`)
    }
}

const u1:User = {email: "rafael@gmail.com" , role: "Admin",}

const u2:User = {email: "aroi@gamail.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - readOnly (não muda o valor)

interface Car {
    brand: string,
    readonly whelss: number,
}

const fusca:Car = {
    brand: "VW",
    whelss: 4
}

console.log(fusca)

// fusca.whelss = 5

// 4 index Signature (quando nao sabemos o nome da propiedade no interface)

interface CoordObject{
    [index: string]: number
}

let coords:CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// coords.z = "teste"

// 5 Extending interfaces (aumentar a interface)

interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human{
    superpower: string[]
}

const rafael:Human = {
    name:"rafael",
    age: 16,
}

console.log(rafael)

const Goku:SuperHuman = {
    name:"goku",
    age: 30,
    superpower:["dshfi", "disojf", "edhfoid"]
}

console.log(Goku)

// 6 - Intersection Types (Junta as interfaces)

interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arold: HumanWithGun = {
    name: "Arold",
    type:"Shot gun",
    caliber: 12
}

console.log(arold)
console.log(arold.caliber)

// 7 readonly array 

let myArray: ReadonlyArray <string>= ["maça", "pera", "banana"]

console.log(myArray)

myArray.forEach((item) => {
    console.log("fruta " + item)
})

myArray = myArray.map((item) => {
    return `Fruta ${item}`
})

console.log(myArray)

// 8 Tuplas 

type fiveNumbers = [number,number,number,number,number,]

const myFiveNumbers:fiveNumbers = [1,2,3,4,5]

console.log(myFiveNumbers)

type nameAndAge = [string, number]

const anotherUser:nameAndAge = ["Matheus", 30]

console.log(anotherUser[0])

anotherUser[0] = "Joao"

// anotherUser[1] = "teste"

// 9 tuplas com readOnly

function showNumbers(numbers: readonly [number, number]){
    //number[0] = 10
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1,2])
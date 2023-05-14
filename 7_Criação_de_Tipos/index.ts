// 1 - generics (qualquer dado)
function showData<T>(arg: T): string{
    return `O dado é ${arg}`
}

console.log(showData(5))
console.log(showData("Rafael"))

// 2 - Constraint Generics (limita os tipos aceitos)
function showProductName< T extends {name: string}>(obj: T){
    return `O nome do porduto é ${obj.name}`
}

const myObj = {name: "Rafael", cor: "branca"}
const otherProduct = {name: "Carro", wheels:4, engine: 1.0}

console.log(showProductName({myObj}))
console.log(showProductName({otherProduct}))

// 3 - interface com generic

interface myObj<T,U>{
    name:string,
    wheels: T,
    engine: U,
}

type Car = myObj<number, number>
type Pen = myObj<boolean, boolean>

const myCar:Car = {name: "fusca", wheels: 4, engine: 1.0}
const myPen:Pen = {name:"monblanc", wheels: true, engine: true}

console.log(myCar)
console.log(myPen)

// 4 Type Parameters

function getSomeKey<T, K extends keyof T>(obj:T, key: K){
    return `A chave ${key} está presente no objeto e tem valor de ${obj[key]}`
}

const server = {
    hd:"2tb",
    ram:"32gb"
}

console.log(getSomeKey(server, "ram"))
// console.log(getSomeKey(server,"teste"))

// 5 - Key of Type Operator
type Character = {name: string, age: number, hasDriverlicense: boolean}

type C = keyof Character

function showCharacterName (obj: Character, name: C ): string{
    return `${obj[name]}`
}

const myChar: Character = {
    name: "Matheus",
    age: 30,
    hasDriverlicense: true
}

console.log(showCharacterName(myChar,"age"))

// 6 - type Of Type Operator 

const userName: string = "matheus"

const userName2: typeof userName = "Jao"

// const UserName3 : typef userName = 12

type x = typeof userName

const userName4: x = "Joao"

// 7 indexed acess Type

type Truck = {km: number, kg: number, description: string}

type Km = Truck["km"]

const newTruck: Truck = {
    km:1000,
    kg: 5000,
    description:"Caminhao para pouca carga"
}

function showKm(km:Km){
    console.log(`O veiculo tem o km de ${km}`)
}

showKm(newTruck.km)

const newCar = {
    km: 5000,
    kg: 3000,
    description: "o caminhao para muita carga"
}

showKm(newCar.km)

// 8 - Conditional Types

interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 5
// const someVar2:myType = "teste"

type myTypeB = Teste extends {showNumber(): number}? string : boolean
// extends = if, se tem = string, se nao = boolean

// 9 - Template Literals Type

type testA = "text"

type CustomType = `some ${testA}`

const testing: CustomType = "some text"

// const testing2: CustomType = "some text 2"

type a1 = "testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`
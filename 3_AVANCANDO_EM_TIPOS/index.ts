// 1 - arrays
let number: number[] = [1,2,3,4]

number.push(5)

console.log(number[2])

const nome: string[] = ["Joao","mairia","josé"]

nome.push("Joao")

//2 - sintaxe diferente

const nums: Array<number> = [100, 200, 300]

nums.push(300)

console.log(nums)

// nums.push("teste")

console.log(nums[0])

// 3 - any qualquer tipo satisfaz

const arr1: any = [1, "teste", true,[]]

arr1.push([1,2,3]);

console.log(arr1)

// 4 tipo de parametro em funçoes

function soma (a: number , b: number){
    console.log(a + b)
}

soma(4, 5)

// soma("a" , "b")

// 5 tipos de retorno de funçoes 

function greeting(name: string): string {
    return `olá ${name}`
}

console.log(greeting("rafael"))

// 6 funcao anonima
setTimeout(function() {
    const sallary: number = 1000

    //console.log(parseFloat(sallary))

    // console.log(sallary)

}, 2000)

// 7 tipos em objetos

 function passCordinates (cord: {x: number, y: number}) {
    console.log("X cordenada " + cord.x)
    console.log("Y cordenada " + cord.y)
 }

 const objCord = {x: 329, y:84.3}

passCordinates(objCord)
// passCordinates({nome: 1 , sobrenome: 2})

const pessoaObj: {nome: string, surname: string} = {nome: "rafael", surname:"alonso"}

// 9 opcionais

function showNumbers(a: number, b?:number, c?: number){
    console.log("A: " + a)
    if(b){
        console.log("b: " + b)
    }
    
    if(c){
        console.log("c: " + c)
    }
}

showNumbers(12143 ,2123 )

showNumbers(123)

// 9 validando argumentos opcionais

function advancedGreeting(firstName: string, lastName?: string){

    if(lastName !== undefined){
        return(`Olá  ${firstName} ${lastName}, tudo bem?`)
    }

    return(`Olá, ${firstName}, tudo bem?`)

}

console.log(advancedGreeting("Rafael", "Rodrigues"))
console.log(advancedGreeting("Rafael"))

// 10 - Union Type

function showBalance(balance: string | number ){
    console.log(`O saldo da conta é R$ ${balance}`)
}

showBalance(100)
showBalance('500')
// showBalance(true)

// 11 avançando em union type

function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuario nao aprovado"
    }

    return `a função do usuario é: ${role}`

}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// 12 type alias
// cria um tipo e determina oq ele verifica

type ID = string | number

function showId(id: ID){
    console.log(`O ID é: ${id}`)
}

showId(123)
showId("23478")

// 13 - Interface

interface Point {
    x1: number
    y2: number
    z3: number
}

// function showCoords(obj: {x:number, y:number, z:number})

function showCoords(obj: Point){
    console.log(`${obj.x1}, ${obj.y2}, ${obj.z3}`)

}

const coordObj: Point = {
    x1: 10,
    y2: 20,
    z3: 30
}

showCoords(coordObj)

// 14 interface x type alias

interface Person {
    name: string
}

interface Person{
    age: number
}

const somePerson: Person = {name: "Mateus", age: 30}

console.log(somePerson)

type personType = {
    name: string
}

// type personType = {
//     age: number
// }      (ele nap aceita adicionar mais vairaveis)

// 15 literal types obs(valores como tipos)

let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center"){
    console.log(`A direção é: ${direction}`);
}

showDirection("left")
// showDirection("1213ight")

// 16 non null assertion operator (NÃO NULO [!])

const p = document.getElementById("some-p")

console.log(p!.innerHTML)

// 17 Bigint (declarar numeros com valores altos)

let n: bigint

n = 10000n

console.log(n)

console.log(typeof(n))

// 18 Symbol (Valor unico)

let symbolA = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)

// 1 - void

function noReturn():void {
    console.log("não recebe retorno")
}
noReturn()

// 2 - Callback Como argumento

function greeting(name: string):string{
    return(`Olá ${name}`)
}

function preGreeting(f:(name: string) => string, userName: string){
    console.log("Preparando")

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting,"Rafael")

// 3 - generic function

function functionArray<T>(arr: T[]){
    console.log(arr[0]) 
}

const array = ["idsofj", "sduifh", "hdsifu"]
const number = [134, 324213, 4213]

functionArray(array)
functionArray(number)

function mergeObjects<U,T>(obj1: U, obj2: T){
    return{
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Rafael"}, {age: 16, job: "Programer"})

console.log(newObject)

console.log(array)
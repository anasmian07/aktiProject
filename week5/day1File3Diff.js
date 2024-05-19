

// anyName() // ? error => to shi keh rha 

// const anyName = () => {
//     console.log(`arrow function`)
// }



let squareOne = normalFunction(4) // ? error lakin error nhi dia
console.log(squareOne)

function normalFunction (num1) {
    return num1*num1
}

const zeroInputFunction = () => {
    console.log(`function returned nothing`)
}

let returnedResult =  zeroInputFunction()
console.log(returnedResult)


const mulFunction = (n1, n2)=> {
    return n1 * n2
    // any thing else here written wo ab execute nhi ho gi
    console.log(`statement written after return`)
}

let mulAns1 = mulFunction(4,5) // 20
console.log(` mulAns1 ram value = ${mulAns1}`)

const mulFuntionWithNoReturn = (n1,n2) => {
    console.log(n1*n2)
}
let noReturnAns =  mulFuntionWithNoReturn(6,7)
console.log(noReturnAns) // 42 ? no
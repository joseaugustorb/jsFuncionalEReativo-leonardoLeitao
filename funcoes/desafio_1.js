// function add(a = 0) {
//     return function(b = 0) {
//         return function(c = 0) {
//             return a + b + c
//         }
//     }
// }

// const addMoreB = add()
// const addMoreC = addMoreB(3)
// const totalSum = addMoreC(4)

// console.log(totalSum)

// console.log(add()(3)(4))

// const subtract = function(a, b) {
//     return a - b
// }

// const multiply = function(a, b) {
//     return a * b
// }

// function calculate(a = 0) {
//     return function(b = 0) {
//         return function(fn) {
//             return fn(a, b)
//         }
//     }
// }

// usando arrow function
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const calculate = (a = 0) => (b = 0) => (fn) => fn(a, b)

const result = calculate(5)(2)(subtract)
console.log(result)


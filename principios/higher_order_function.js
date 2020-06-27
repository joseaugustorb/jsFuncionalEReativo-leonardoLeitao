// Funções que operam em outras funções, tornando-as como argumentos
// ou retornando-as, são chamadas de higher-order function.  

// EXEMPLO 1
function fn1(name) {
    return `Bom dia, ${name}!`
}

// fn2 recebe fn1 (uma função) como parâmetro e retorna fn1, ou seja, fn1 
// opera em fn2. Portanto, fn2 assume o papel de uma higher-order function.
function fn2(fn1) {
    return fn1
}

const greeting = fn2(fn1('José')) 
console.log(greeting)

// EXEMPLO 2
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const share = (a, b) => a / b

const execute = (...parameters) => (fn) => fn(...parameters) 

console.log(execute(4, 2)(add))
console.log(execute(4, 2)(subtract))
console.log(execute(4, 2)(multiply))
console.log(execute(4, 2)(share))



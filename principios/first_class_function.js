// Em uma linguagem de programação que possui funções de primeira classe, 
// essas funções são tratadas como qualquer outra variável.

var greeting = 'Olá!'
console.log(`typeof: ${typeof greeting}, value: ${greeting}`)

greeting = name => `Olá, ${name}!`
console.log(`typeof: ${typeof greeting}, value: ${greeting('José')}`)

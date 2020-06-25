// Ler um arquivo texto de forma síncrona ou assíncrona

const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString())
}

console.log('Início...')
// comportamento assíncrono
fs.readFile(caminho, exibirConteudo)
console.log('Fim')

console.log('Início Sync...')
// comportamento síncrono
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')



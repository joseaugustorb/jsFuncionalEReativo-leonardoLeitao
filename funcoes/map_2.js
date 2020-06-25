const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

// const nomes = (_, i) => carrinho[i].nome
// console.log(carrinho.map(nomes))

const getNomes = item => item.nome
console.log(carrinho.map(getNomes))

// const totais = (_, i) => carrinho[i].qtde * carrinho[i].preco
// console.log(carrinho.map(totais))

const getTotais = item => item.qtde * item.preco
console.log(carrinho.map(getTotais))


// Array.prototype.meuMap = function(fn) {
//     const novoArray = []
//     for(let i = 0; i < this.length; i++) {
//         novoArray.push(fn(this[i], i, this))
//     }
//     return novoArray
// }
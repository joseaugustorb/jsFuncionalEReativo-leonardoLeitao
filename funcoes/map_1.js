const numeros = [1, 2, 3, 4, 5]

const calcular = (n, i, a) => n * i + a.length
console.log(numeros.map(calcular))

const nomes = ['Ana', 'Bia', 'Teo', 'Mia', 'Leo']

const qtdeDeCaracteres = n => n.length
const primeiraLetra = n => n[0]
console.log(nomes.map(qtdeDeCaracteres), 
    nomes.map(primeiraLetra))








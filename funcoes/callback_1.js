const somar = (a, b) => console.log(a + b)
const subtrair = (a, b) => console.log(a - b)

// função callback que recebe outra função por parâmetro
// e retorna o resultado dessa função que foi passada por
// parâmetro

const exec = (fn, a, b) => fn(a, b)

exec(somar, 1, 2)
exec(subtrair, 10, 5)


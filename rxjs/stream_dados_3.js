const { interval } = require('rxjs')

const generateNumbers = interval(500)

const sub1 = generateNumbers.subscribe(number => console.log(Math.pow(2, number)))
const sub2 = generateNumbers.subscribe(number => console.log(number + 100))

setTimeout(() => sub1.unsubscribe(), 3000)
setTimeout(() => sub2.unsubscribe(), 6000)
const { Observable, Subscriber } = require('rxjs')

const promisse = new Promise(resolve => {
    resolve('Promisse é bem legal!')
})

promisse.then(console.log)

const obs = new Observable(subscriber => {
    subscriber.next('Observer')
    subscriber.next('é')
    subscriber.next('bem')
    setTimeout(() => {
        subscriber.next('legal!')
    }, 3000)
})

obs.subscribe(console.log)
obs.subscribe(text => console.log(text.toUpperCase()))
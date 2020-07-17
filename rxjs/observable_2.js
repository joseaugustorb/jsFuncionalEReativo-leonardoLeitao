const { Observable } = require('rxjs')

const obs = Observable.create(subscriber => {
    subscriber.next('RxJS')
    subscriber.next('é')
    subscriber.next('bem')
    subscriber.next('poderoso!')

    if(Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error('Que problema!')
    }
})

// obs.subscribe(
//     value => console.log(`Valor: ${value}`),
//     error => console.log(`Erro: ${error}`),
//     () => console.log('Fim!')
// )

obs.subscribe({
    next(value) {
        console.log(`Valor: ${value}`)
    },
    error(msg) {
        console.log(`Erro: ${msg}`)
    },
    complete() {
        console.log('Fim!')
    }
})
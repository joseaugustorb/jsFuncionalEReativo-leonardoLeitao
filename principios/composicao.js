const composition = (...fns) => 
    initialValue =>
        fns.reduce(async (acc, fn) => {
            if(Promise.resolve(acc) === acc) {
                return fn(await acc)
            } else {
                return fn(acc)
            }
        }, initialValue)

const toEmphasize = text => `${text}!!!`
const changeToUpperCase = text => text.toUpperCase()

const slow = text => new Promise(resolve => {
        setTimeout(_ => {
            resolve(text.split('').join(' '))
        }, 5000)
    })

const changeText = composition(
    toEmphasize,
    changeToUpperCase,
    slow
)

const changeTextWithoutSlow = composition(
    toEmphasize,
    changeToUpperCase
)

changeText('Boa noite')
   .then(console.log)

changeTextWithoutSlow('Bom dia')
    .then(console.log)


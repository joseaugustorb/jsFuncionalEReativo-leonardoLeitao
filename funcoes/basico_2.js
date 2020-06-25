const goodMorning = function() {
    console.log('Good morning!')
}

// 1- função que recebe como parâmetro outra função

function execute(fn) {
    if(typeof fn === 'function') {
        fn()
    } else {
        console.log(`${fn} is not a function!`)
    }
}

execute(goodMorning)

// 2- função que retorna outra função

// function greeting(text) {
//     return function() {
//         console.log(`${text}`)
//     }
// }

function greeting(text) {
    return function(name) {
        console.log(`${text} ${name}`)
    }
}

// const showGreetingTo = greeting('Olá')
// showGreetingTo('José')

greeting('Olá')('José')




function generateData(array) {
    return {
        start(fn, interval = 1000) {
            let index = 0
            const i = setInterval(() => {
                if(index >= array.length) {
                    clearInterval(i)
                } else {
                    fn(array[index])
                    index++
                }
            }, interval)

            return {
                stop() {
                    clearInterval(i)
                }
            }
        }
    }
}

const names = ['José', 'Ana', 'Bia', 'Carlos']

const temp1 = generateData(names)
const exec1 = temp1.start(name => {
    console.log(`${name} Souza`)
}, 2000)

setTimeout(() => {
    exec1.stop()
}, 5000)
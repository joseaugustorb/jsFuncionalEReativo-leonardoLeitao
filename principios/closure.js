// Closure é quando uma função lembra de seu escopo léxico, mesmo quando a função 
// é executada fora do mesmo.

const meuContextoLexico = require('./closure_escopo')
const path = require('path')

const caminho = path.join(__filename)

// Por mais que a função meuContextoLexico() tenha sido executada fora de seu escopo léxico,
// ela se lembra de onde ela foi criada. Então, neste caso, o comando abaixo mostrará o caminho
// onde a função foi criada (./closure_escopo), e não o caminho onde ela foi chamada (./clouse). 
console.log(meuContextoLexico())

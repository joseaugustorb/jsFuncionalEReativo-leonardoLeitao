const path = require('path')

const caminho = path.join(__filename)
const meuContextoLexico = _ => `Meu contexto léxico: ${caminho}`

module.exports = meuContextoLexico
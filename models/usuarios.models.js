
const { executeQuery } = require("./helpers")

const crearUsuario = ({ nombre, email, password, telefono }) => {
    return executeQuery('INSERT INTO usuarios (nombre, email, password, telefono) VALUES (?,?,?,?)', [nombre, email, password, telefono])
}


module.exports = { crearUsuario }
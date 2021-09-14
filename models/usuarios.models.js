
const { executeQuery, executeQueryUnique } = require("./helpers")

const crearUsuario = ({ nombre, email, password, telefono }) => {
    return executeQuery('INSERT INTO usuarios (nombre, email, password, telefono) VALUES (?,?,?,?)', [nombre, email, password, telefono])
}

const borrarUsuarioId = (idUsuario) => {
    return executeQueryUnique('DELETE FROM usuarios where id=?', [idUsuario])
}


module.exports = { crearUsuario, borrarUsuarioId }
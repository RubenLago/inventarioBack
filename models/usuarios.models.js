
const { executeQuery, executeQueryUnique } = require("./helpers")

const crearUsuario = ({ nombre, apellidos, username, email, password, telefono }) => {
    return executeQuery('INSERT INTO usuarios (nombre,apellidos,username, email, password, telefono) VALUES (?,?,?,?,?,?)', [nombre, apellidos, username, email, password, telefono])
}

const borrarUsuarioId = (idUsuario) => {
    return executeQueryUnique('DELETE FROM usuarios where id=?', [idUsuario])
}


module.exports = { crearUsuario, borrarUsuarioId }
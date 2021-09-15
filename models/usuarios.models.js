
const { executeQuery, executeQueryUnique } = require("./helpers")

const crearUsuario = ({ nombre, apellidos, username, email, password, telefono }) => {
    return executeQuery('INSERT INTO usuarios (nombre,apellidos,username, email, password, telefono) VALUES (?,?,?,?,?,?)', [nombre, apellidos, username, email, password, telefono])
}

const borrarUsuarioId = (idUsuario) => {
    return executeQueryUnique('DELETE FROM usuarios where id=?', [idUsuario])
}

//login
const getByEmail = (email) => {
    return executeQueryUnique('select * from usuarios where email = ?', [email])
}


module.exports = { crearUsuario, borrarUsuarioId, getByEmail }
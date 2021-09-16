
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

//recuperar negocios de un usuario
const getNegociosUsuario = (idUsuario) => {
    return executeQuery('SELECT * FROM usuario_restaurantes ur, negocios n where fk_usuario_id = ? and ur.fk_restaurante_id = n.id', [idUsuario])
    //nos da el id de los negocios del usuario marcado
}



module.exports = { crearUsuario, borrarUsuarioId, getByEmail, getNegociosUsuario }
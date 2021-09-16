const { executeQuery, executeQueryUnique } = require("./helpers")

const createNegocio = ({ nombre, calle, numero, cp, cif }) => {
    return executeQuery('INSERT INTO negocios (nombre, calle, numero, cp, cif) VALUES (?,?,?,?,?)', [nombre, calle, numero, cp, cif])
}

const negocioUsuario = (fk_negocio_id, fk_usuario_id) => {
    return executeQuery('INSERT INTO usuario_restaurantes (fk_negocio_id, fk_usuario_id) VALUES(?,?)',
        [fk_negocio_id, fk_usuario_id])
}


module.exports = { createNegocio, negocioUsuario }
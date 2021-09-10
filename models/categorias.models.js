const { executeQuery, executeQueryUnique } = require("./helpers")

const getAll = () => {
    return executeQuery('select * from categorias')
}

const getById = (categoriaId) => {
    return executeQueryUnique('select * from categorias where id = ? ', [categoriaId])
}

const create = ({ nombre }) => {
    return executeQueryUnique('INSERT INTO categorias (nombre) values (?)', [nombre])
}

const deleteById = (categoriaId) => {
    return executeQueryUnique('delete from categorias where id = ? ', [categoriaId])
}

const updateCategoria = ({ id, nombre, color }) => {
    return executeQuery(`UPDATE productos SET nombre="${nombre}", color="${color}" where id="${id}" ?`)
}



module.exports = { getAll, create, deleteById, getById, updateCategoria }
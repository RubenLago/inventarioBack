const { executeQuery, executeQueryUnique } = require("./helpers")

const getAll = () => {
    return executeQuery('select * from categorias')
}

const getById = (categoriaId) => {
    return executeQueryUnique('select * from categorias where id = ? ', [categoriaId])
}

const getByCategoria = (negocioId) => {
    return executeQuery('SELECT distinct(fk_categoria_id), cat.* from productos prod, categorias cat where fk_negocio_id =? and prod.fk_categoria_id = cat.id', [negocioId]
    )
}



const createCategoria = ({ nombre, color }) => {
    return executeQuery('INSERT INTO categorias (nombre, color) values (?,?)', [nombre, color])
}

const deleteById = (categoriaId) => {
    return executeQuery('delete from categorias where id = ? ', [categoriaId])
}

const updateCategoria = ({ id, nombre, color }) => {
    return executeQuery(`UPDATE productos SET nombre="${nombre}", color="${color}" where id="${id}" ?`)
}

//filtrar categorias por caracteres-nombre
const getByCharac = (filtroTexto) => {
    return executeQuery('SELECT nombre FROM categorias WHERE nombre LIKE ?', [`%${filtroTexto}%`])
    //filtrado '%vin%'
}



module.exports = { getAll, createCategoria, deleteById, getById, updateCategoria, getByCharac, getByCategoria }
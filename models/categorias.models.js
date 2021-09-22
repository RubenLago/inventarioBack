const { executeQuery, executeQueryUnique } = require("./helpers")

const getAll = () => {
    return executeQuery('select * from categorias')
}

const getById = (categoriaId) => {
    return executeQueryUnique('select * from categorias where id = ? ', [categoriaId])
}

const getByCategoria = (negocioId) => {
    return executeQuery('SELECT distinct(fk_categoria_id) as id, cat.nombre from categorias_negocios catneg, categorias cat where catneg.fk_negocio_id = ? and catneg.fk_categoria_id = cat.id', [negocioId]);
}

const createCategoria = ({ nombre }) => {
    return executeQuery('INSERT INTO categorias (nombre) VALUES (?)', [nombre])
}

const deleteById = (categoriaId) => {
    return executeQuery('delete from categorias where id = ? ', [categoriaId])
}

const updateCategoria = ({ id, nombre }) => {
    return executeQuery(`UPDATE productos SET nombre="${nombre}", where id="${id}" ?`)
}

const createCategoriaNegocio = (fk_negocio_id, fk_usuario_id) => {
    return executeQuery('INSERT INTO usuario_restaurantes (fk_negocio_id, fk_usuario_id) VALUES(?,?)',
        [fk_negocio_id, fk_usuario_id])
}

const getCatByCharac = (negocioId, filtroTexto) => {
    return executeQuery('SELECT prod.*, cat.nombre as nombre_categoria FROM productos prod, categorias cat WHERE prod.fk_negocio_id = ? AND cat.nombre like ? AND prod.fk_categoria_id = cat.id', [negocioId, `%${filtroTexto}%`])
    //filtrado '%palo%'
}


module.exports = { getAll, createCategoria, deleteById, getById, updateCategoria, getCatByCharac, createCategoriaNegocio, getByCategoria }
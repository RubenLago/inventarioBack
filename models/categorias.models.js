const { executeQuery, executeQueryUnique } = require("./helpers")

const getAll = () => {
    return executeQuery('select * from categorias')
}

const getById = (categoriaId) => {
    return executeQueryUnique('select * from categorias where id = ? ', [categoriaId])
}

const getByCategoria = (negocioId) => {
    return executeQuery('SELECT distinct(fk_categoria_id) as id, cat.nombre, cat.color from categorias_negocios catneg, categorias cat where catneg.fk_negocio_id = ? and catneg.fk_categoria_id = cat.id', [negocioId]);
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
const filterByCharac = (filtroTexto) => {
    return executeQuery('SELECT nombre FROM categorias WHERE nombre LIKE ?', [`%${filtroTexto}%`])
    //filtrado '%vin%'
}

//recuperar categorias de un negocio
const createCategoriaNegocio = (fk_negocio_id, fk_categoria_id) => {
    return executeQuery('INSERT INTO categorias_negocios (fk_categoria_id, fk_negocio_id) VALUES(?,?)',
        [fk_negocio_id, fk_categoria_id])
}




module.exports = { getAll, createCategoria, deleteById, getById, updateCategoria, filterByCharac, getByCategoria, createCategoriaNegocio }
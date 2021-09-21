const { executeQuery } = require("./helpers")
const { executeQueryUnique } = require("./helpers")

//recuperar todos los productos
const getAll = () => {
    return executeQuery('select * from productos')
}

//recuperar un producto ID
const getById = (idProductos) => {
    return executeQueryUnique('SELECT * FROM productos where id = ?', [idProductos])
}

//borrar producto
const deleteById = (productoId) => {
    return executeQuery('delete from productos where id = ?', [productoId])
}

//crear producto nuevo
const createProducto = ({ nombre, formato, cantidad, precioSin, iva, fk_negocio_id, fk_categoria_id }) => {
    return executeQuery('INSERT INTO productos (nombre,formato,cantidad, precioSin, iva,fk_negocio_id, fk_categoria_id) VALUES (?,?,?,?,?,?,?)', [nombre, formato, cantidad, precioSin, iva, fk_negocio_id, fk_categoria_id])
}


//crear producto nuevo
/* query >>>
  UPDATE productos SET 
  nombre='cocaCero',
  formato='botella',
  cantidad='40',
  preciosin='',
  iva='',
  precioCon='' 
WHERE id=8 */
//con templateliteral para actualizar
const updateProducto = ({ id, nombre, formato, cantidad, precioSin, iva }) => {
    return executeQuery(`UPDATE productos SET nombre="${nombre}",formato="${formato}", cantidad="${cantidad}", precioSin="${precioSin}", iva="${iva}", precioCon="${(((iva) / 100)) * precioSin}" WHERE id=${id}`)
}

const getByNegocio = (negocioId) => {
    return executeQuery('SELECT prod.*, cat.nombre as nombre_categoria FROM  categorias cat ,productos prod where prod.fk_negocio_id = ? and prod.fk_categoria_id = cat.id', [negocioId])
}

//filtrar productos por caracteres-nombre
const getByCharac = (negocioId, filtroTexto) => {
    return executeQuery('SELECT prod.*, cat.nombre as nombre_categoria FROM productos prod, categorias cat WHERE prod.fk_negocio_id = ? AND prod.nombre like ? AND prod.fk_categoria_id = cat.id', [negocioId, `%${filtroTexto}%`])
    //filtrado '%palo%'
}


module.exports = { getAll, getById, createProducto, deleteById, updateProducto, getByNegocio, getByCharac }

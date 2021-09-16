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
const createProducto = ({ nombre, formato, cantidad, precioSin, iva, precioCon }) => {
    return executeQuery('INSERT INTO productos (nombre,formato,cantidad, precioSin, iva, precioCon) VALUES (?,?,?,?,?,?)', [nombre, formato, cantidad, precioSin, iva, precioCon])
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
    return executeQuery(`UPDATE productos SET nombre="${nombre}",formato="${formato}", cantidad="${cantidad}", precioSin="${precioSin}", iva="${iva}", precioCon="${(((iva) / 100) + 1) * precioSin}" WHERE id=${id}`)
}

const getByNegocio = (negocioId) => {
    return executeQuery('SELECT * FROM productos where fk_negocio_id = ?', [negocioId])
}

module.exports = { getAll, getById, createProducto, deleteById, updateProducto, getByNegocio }

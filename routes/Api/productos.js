const { getAll, getById, deleteById, createProducto, updateProducto, getByNegocio, getByCharac } = require('../../models/producto.models');

const router = require('express').Router();

//ver todos los productos
router.get('/', async (req, res) => {
    const productos = await getAll();

    res.json(productos)
})

//ver un producto id
router.get('/:id', async (req, res) => {
    const producto = await getById(req.params.id);
    res.json(producto)
})

//borrar un producto
router.delete('/:id', async (req, res) => {
    const borrarProducto = await deleteById(req.params.id)
    res.json(borrarProducto)

})

//crear producto
router.post('/create', async (req, res) => {
    console.log(req.body)
    const nuevoProducto = await createProducto(req.body)
    res.json(nuevoProducto)
})

//editar producto
router.put('/', async (req, res) => {
    console.log(req.body);
    const dbActual = await updateProducto(req.body)
    res.json(dbActual)
})

//recuperar productos negocio
router.get('/negocios/:id', async (req, res) => {
    const pNegocios = await getByNegocio(req.params.id);
    res.json(pNegocios)
})

//filtrar productos por caracteres de un negocio
router.get('/negocios/:id/:filtro', async (req, res) => {
    console.log(req.params)
    const filtroProductos = await getByCharac(req.params.id, req.params.filtro)
    res.json(filtroProductos)
})


module.exports = router;
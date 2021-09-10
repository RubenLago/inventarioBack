const { getAll, create, deleteById, getById, updateCategoria } = require('../../models/categorias.models');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const result = await getAll();
    res.json(result)
})

router.get('/:categoriaId', async (req, res) => {
    const categoriaUnica = await getById(req.params.categoriaId);
    res.json(categoriaUnica)
})

router.post('/create', async (req, res) => {
    const categoriaCreada = await create(req.body);
    console.log(categoriaCreada)
    res.json(categoriaCreada)
})

router.delete('/:categoriaId', async (req, res) => {
    const result = await deleteById(req.params.categoriaId);
    res.json(result);
})

router.put('/:categoriaId', async (req, res) => {
    const result = await updateCategoria(req.body)
    res.json(result)
})


module.exports = router
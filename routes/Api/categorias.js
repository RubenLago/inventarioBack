const { getAll, createCategoria, deleteById, getById, updateCategoria, getCatByCharac, getByCategoria, createCategoriaNegocio } = require('../../models/categorias.models');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const result = await getAll();
    res.json(result)
})

//filtrar categorias por caracteres
router.get('/search/:id/:filtro', async (req, res) => {
    console.log(req.params)
    const filtroCategorias = await getCatByCharac(req.params.id, req.params.filtro)
    res.json(filtroCategorias)
})

router.get('/:categoriaId', async (req, res) => {
    const categoriaUnica = await getById(req.params.categoriaId);
    res.json(categoriaUnica)
})

router.post('/create/:idNegocio', async (req, res) => {
    const categoriaCreada = await createCategoria(req.body);
    await createCategoriaNegocio(categoriaCreada.insertId, req.params.idNegocio);
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

router.get('/filter/:negocioId', async (req, res) => {
    const categoriaConseguida = await getByCategoria(req.params.negocioId);
    res.json(categoriaConseguida)
})




module.exports = router
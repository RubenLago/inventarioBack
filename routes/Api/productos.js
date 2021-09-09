const { getAll } = require('../../models/producto.models');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const productos = await getAll();

    res.json(productos)
})

module.exports = router;
const { createNegocio, negocioUsuario } = require('../../models/negocios.models');
const { checkToken } = require('../middelwares');

const router = require('express').Router();

router.post('/create', checkToken, async (req, res) => {
    const newNegocio = await createNegocio(req.body);
    console.log(req.user.id, newNegocio.insertId)
    await negocioUsuario(newNegocio.insertId, req.user.id);

    res.json(newNegocio)
})

module.exports = router;
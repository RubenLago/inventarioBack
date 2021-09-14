const { crearUsuario } = require('../../models/usuarios.models');


const router = require('express').Router();

//resgistrar nuevo usario
router.post('/registro', async (req, res) => {
    console.log(req.body)
    const nuevoUsuario = await crearUsuario(req.body)
    res.json(nuevoUsuario)

})

module.exports = router





const { crearUsuario, borrarUsuarioId } = require('../../models/usuarios.models');


const router = require('express').Router();

//resgistrar nuevo usario
router.post('/registro', async (req, res) => {
    //console.log(req.body)
    const nuevoUsuario = await crearUsuario(req.body)
    res.json(nuevoUsuario)

})

//borrar usuario
router.delete('/borrar/:idUsuario', async (req, res) => {
    const borrar = await borrarUsuarioId(req.params.idUsuario)
    res.json(borrar)

})

module.exports = router





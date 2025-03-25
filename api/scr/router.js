const express = require('express');
const router = express.Router();

const Cliente = require ('./controllers/cliente');
const Pedido = require ('./controllers/pedido');
const Telefone = require ('./controllers/telefone')

router.get('/', (req, res)=>{
    res.json({titulo:'Snoopy PetShop'});
});

router.post('/clientes', Cliente.create);
router.get('/clientes', Cliente.read);
router.patch('/clientes/:id', Cliente.update);
router.delete('/clientes/:id', Cliente.remove);

router.post('/pedidos', Pedido.create);
router.get('/pedidos', Pedido.read);
router.patch('/pedidos/:id', Pedido.update);
router.delete('/pedidos/:id', Pedido.remove);

router.post('/tel', Telefone.create);
router.get('/tel', Telefone.read);
router.patch('/tel/:id', Telefone.update);
router.delete('/tel/:id', Telefone.remove);

module.exports = router;

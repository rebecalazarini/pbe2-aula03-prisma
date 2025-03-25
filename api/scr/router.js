const express = require('express');
const router = express.Router();

const Cliente = require ('./controllers/cliente');

router.get('/', (req, res)=>{
    res.json({titulo:'Snoopy PetShop'});
});

router.post('/clientes', Cliente.create);
router.get('/cliente', Cliente.read);
module.exports = router;

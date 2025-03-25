const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {

    const cliente = prisma.cliente.create({
        body: req.body
    });
    res.status(201).json(cliente).end();
} 

const read = async (req, res) => {
    const clientes = prisma.findMany({});
    res.json(clientes);
}

module.exports ={
    create,
    read
}
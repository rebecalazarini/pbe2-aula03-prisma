const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const { clienteId, produto, qtd, preco } = req.body;

        if (!clienteId || !produto || !qtd || !preco) {
            return res.status(400).json().end();
        }

        const pedido = await prisma.pedido.create({
            data: {
                clienteId,
                produto,
                qtd,
                preco,
                subTotal: qtd * preco 
            }
        });
        res.status(201).json(pedido).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
};

const read = async (req, res) => {
    try {
        const pedidos = await prisma.pedido.findMany({
            include: { cliente: true } 
        });
        res.status(200).json(pedidos).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
};

const update = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const pedido = await prisma.pedido.update({
            where: { id },
            data: {
                produto: req.body.produto,
                qtd: req.body.qtd,
                preco: req.body.preco,
                subTotal: req.body.qtd * req.body.preco
            }
        });

        res.status(200).json(pedido).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
};

const remove = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const pedido = await prisma.pedido.delete({
            where: { id }
        });

        res.status(200).json(pedido).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
};


module.exports = {
    create,
    read,
    update,
    remove
};

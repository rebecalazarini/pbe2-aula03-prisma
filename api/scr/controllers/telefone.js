const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const { clienteId, numero, tipo } = req.body;

        if (!clienteId || !numero || !tipo) {
            return res.status(400).json().end();
        }

        const telefone = await prisma.telefone.create({
            data: {
                clienteId,
                numero,
                tipo
            }
        });
        res.status(201).json(telefone).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
};

const read = async (req, res) => {
    try {
        const telefones = await prisma.telefone.findMany({
            include: { cliente: true } 
        });
        res.status(200).json(telefones).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
};

const update = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const telefone = await prisma.telefone.update({
            where: { id },
            data: {
                numero: req.body.numero,
                tipo: req.body.tipo
            }
        });

        res.status(200).json(telefone).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
};

const remove = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const telefone = await prisma.telefone.delete({
            where: { id }
        });

        res.status(200).json(telefone).end();
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

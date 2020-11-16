const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/register', async(req, res) => {
    const { email } = req.body;

    try {
        if (await User.findOne({ email })) {
            return res.status(400).send({ error: 'Email ja cadastrado' });
        }

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user })
    } catch (error) {
        return res.status(400).send({ error: 'Erro ao cadastrar usuario' });
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return res.status(400).send({ error: 'Email nao cadastrado' })
    }

    if (password != user.password) {
        return res.status(400).send({ error: 'senha invalida' })
    }

    user.password = undefined;

    res.send({ user });
})

module.exports = (app) => {
    app.use('/auth', router);
}
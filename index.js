const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Ok');
})

app.listen(PORT, () => {
    console.log(`Conectado na porta ${PORT}`);
})
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
require('./controllers/auth')(app);

app.listen(PORT, () => {
    console.log(`[Server] Conectado na porta ${PORT}`);
});
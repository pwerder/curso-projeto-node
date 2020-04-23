const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Essa é a primeira rota criada com o express");
});


app.listen(3000, () => {
    console.log("Servidor Rolando...");
});
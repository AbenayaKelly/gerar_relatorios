const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/db");
const reportRoutes = require("./routes/report");

const app = express();

app.use(bodyParser.json());

app.use( reportRoutes);

// Sincronizar banco de dados e iniciar o servidor
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });
}).catch((err) => {
    console.log("Erro ao inicializar o banco de dados:", err);
});
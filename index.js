const express = require('express');
const { sequelize } = require('./src/config/configDB');
require('dotenv').config();
const livroRoute = require('./src/modules/livro/routes/livro.route');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api', livroRoute);

app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        await sequelize.sync();
        console.log('Tabelas sincronizadas com o banco de dados.');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
    console.log(`Servidor rodando na porta ${port}`);
});
  
  module.exports = app;
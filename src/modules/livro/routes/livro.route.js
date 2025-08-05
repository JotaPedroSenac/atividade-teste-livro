const express = require('express');
const livroController = require('../controllers/livro.controller')

const router = express.Router();

//cadastrar livro

router.post('/livros', livroController.criar);
module.exports = router;
const livroModel = require('../models/livro.model');

class livroController{
    static async criar(req, res){
        try {
            const { titulo, autor, ano_publicacao, genero, preco } = req.body
            if (!titulo || !autor||  !ano_publicacao || !genero || !preco) {
                return res.status(400).json({ msg: "Todos os campos devem ser preenchidos!"})
            }

            const novoLivro = await livroModel.create({
                titulo, autor, ano_publicacao, genero, preco
            })
            res.status(201).json({msg: "Livro criado com sucesso", livro: novoLivro});
        } catch (error) {
            res.status(500).json({ error: 'Erro ao cadastrar livro', erro: error.message})
        }
    }
}

module.exports = livroController;
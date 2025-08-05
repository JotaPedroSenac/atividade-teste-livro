const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const LivroModel = sequelize.define('Livro', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },

    titulo: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate:{
            len:[2,200]
        }
    },
    autor: {
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    ano_publicacao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genero: {
        type: DataTypes.ENUM('Romance',
            'Ficção Científica',
            'Fantasia',
            'Terror',
            'Suspense',
            'Aventura',
            'Drama',
            'Mistério',
            'Biografia',
            'Autoajuda',
            'Poesia',
            'História',
            'Didático',
            'Religião',
            'Filosofia',
            'Tecnologia',
            'Negócios',
            'Conto',
            'Ensaio',
            'Humor'),
        allowNull: false,

    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: true,
            //não pode ser negativo
            min: 0
        }
    }
},
    {
        tableName: 'livro',
        timestamps: true,
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em',
    }

);

module.exports = LivroModel;
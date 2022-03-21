const mongoose = require('mongoose');

const CarrinhoSchema = new mongoose.Schema({

    itens: {
        type: Array,
        required: true,
    },

    valorTotal: {
        type: Number,
        required: true,
    }
});

mongoose.model('Carrinho', CarrinhoSchema);
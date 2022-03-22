const mongoose = require('mongoose');

const CarrinhoSchema = new mongoose.Schema({

    item: {
        type: String ,
        required: true,
    },
    quantidade: {
        type: Number ,
        required: true,
    },
    valorUnitario: {
        type: Number,
        required: true,
    },
    valorTotal: {
        type: Number,
        required: true,
    }
});

mongoose.model('Carrinho', CarrinhoSchema);
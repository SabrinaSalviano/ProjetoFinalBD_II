const mongoose = require('mongoose');

const PagamentoSchema = new mongoose.Schema({

    tipo: {
        type: String,
        required: true,
    },

    nmrCartao: {
        type: Number,
        required: true,
    },
    parcela:{
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    valorP: {
        type: Number,
        required: true,
    },
    nmrCartao: {
        type: Number,
        required: true,
    },
    cvv: {
        type: Number,
        required: true,
    },
    validade: {
        type: String,
        required: true,
    },
});

mongoose.model('Pagamento', PagamentoSchema);
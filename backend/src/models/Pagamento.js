const mongoose = require('mongoose');

const PagamentoSchema = new mongoose.Schema({

    tipo: {
        type: String,
        required: true,
    },

    nmrCartao: {
        type: Number,
    },
    parcela:{
        type: String,
    },
    nome: {
        type: String,
    },
    valorP: {
        type: Number,
    },
    cvv: {
        type: Number,
    },
    validade: {
        type: String,
    },
});

mongoose.model('Pagamento', PagamentoSchema);
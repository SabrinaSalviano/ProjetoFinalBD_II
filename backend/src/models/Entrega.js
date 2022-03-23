const mongoose = require('mongoose');

const   EntregaSchema = new mongoose.Schema({

    tipo: {
        type:  String,
        required: true,
    },

    endereco: {
        type: String,
    }, 

    loja: {
        type:  String,
    }
});

mongoose.model('Entrega', EntregaSchema);
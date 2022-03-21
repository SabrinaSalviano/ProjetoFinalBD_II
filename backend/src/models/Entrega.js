const mongoose = require('mongoose');

const   EntregaSchema = new mongoose.Schema({

    tipo: {
        type:  String,
        required: true,
    },

    endereco: {
        type: Array,
        required: true,
    }, 

    retirada: {
        type:  String,
        required: true,
    }
});

mongoose.model('Entrega', EntregaSchema);
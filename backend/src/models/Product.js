const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
    },

    marca: {
        type: String,
        required: true,
    },

    quantidade: {
        type: Number,
        required: true,
    },

    valor: {
        type: Number,
        required: true,
    }
});

mongoose.model('Product', ProductSchema);
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
    },

    cpf: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    senha: {
        type: String,
        required: true,
    }
});

mongoose.model('User', UserSchema);
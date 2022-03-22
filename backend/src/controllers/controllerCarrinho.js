const mongoose = require('../database/db_mongo.js');
const Carrinho = mongoose.model('Carrinho');

module.exports = {
    
    // Listar
    async list(request,response){
        const carrinho = await Carrinho.find();

        return response.json(carrinho);
    },
    // Create
    async create(request,response){
        const newCarrinho = await Carrinho.create(request.body);

        return response.json(newCarrinho);
    },
    // Update
    async update(request,response){
        const carrinho = await Carrinho.findByIdAndUpdate(request.params.id, request.body, { new: true});

        return response.json(carrinho);
    },
    
    // Delete
    async delete(request,response){
        const carrinho = await Carrinho.findByIdAndDelete(request.params.id);

        return response.send("Deletado com sucesso!!!");
    }
}
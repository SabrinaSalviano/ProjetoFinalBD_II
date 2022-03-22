const mongoose = require('../database/db_mongo.js');
const Entrega = mongoose.model('Entrega');

module.exports = {
    
    // Listar
    async list(request,response){
        const entrega = await Entrega.find();

        return response.json(entrega);
    },
    // Create
    async create(request,response){
        const newEntrega = await Entrega.create(request.body);

        return response.json(newEntrega);
    },
    // Update
    async update(request,response){
        const entrega = await Entrega.findByIdAndUpdate(request.params.id, request.body, { new: true});

        return response.json(entrega);
    },
    
    // Delete
    async delete(request,response){
        const entrega = await Entrega.findByIdAndDelete(request.params.id);

        return response.send("Deletado com sucesso!!!");
    }
}
const mongoose = require('../database/db_mongo.js');
const Pagamento = mongoose.model('Pagamento');

module.exports = {
    
    // Listar
    async list(request,response){
        const pagamento = await Pagamento.find();

        return response.json(pagamento);
    },
    // Create
    async create(request,response){
        const newPagamento = await Pagamento.create(request.body);

        return response.json(newPagamento);
    },
    // Update
    async update(request,response){
        const pagamento = await Pagamento.findByIdAndUpdate(request.params.id, request.body, { new: true});

        return response.json(pagamento);
    },
    
    // Delete
    async delete(request,response){
        const pagamento = await Pagamento.findByIdAndDelete(request.params.id);

        return response.send("Deletado com sucesso!!!");
    }
}
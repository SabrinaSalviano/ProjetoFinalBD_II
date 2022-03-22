const mongoose = require('../database/db_mongo.js');
const Product = mongoose.model('Product');

module.exports = {
    
    // Listar
    async list(request,response){
        const product = await Product.find();

        return response.json(product);
    },
    // Create
    async create(request,response){
        const newProduct = await Product.create(request.body);

        return response.json(newProduct);
    },
    // Update
    async update(request,response){
        const product = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true});

        return response.json(product);
    },
    
    // Delete
    async delete(request,response){
        const product = await Product.findByIdAndDelete(request.params.id);

        return response.send("Deletado com sucesso!!!");
    }
}
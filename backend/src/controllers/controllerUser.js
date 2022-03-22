const mongoose = require('../database/db_mongo.js');
const User = mongoose.model('User');

module.exports = {
    
    // Listar
    async list(request,response){
        const user = await User.find();

        return response.json(user);
    },
    // Create
    async create(request,response){
        const newUser = await User.create(request.body);

        return response.json(newUser);
    },
    // Update
    async update(request,response){
        const user = await User.findByIdAndUpdate(request.params.id, request.body, { new: true});

        return response.json(user);
    },
    
    // Delete
    async delete(request,response){
        const user = await User.findByIdAndDelete(request.params.id);

        return response.send("Deletado com sucesso!!!");
    }
}
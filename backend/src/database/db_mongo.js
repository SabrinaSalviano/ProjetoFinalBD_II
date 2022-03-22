const mongoose = require('mongoose');

mongoose.connect('mongodb://172.20.0.2:27017/projetofinalbdiiMongo',{useNewUrlParser: true, useUnifiedTopology: true});

require('../models/Product');
require('../models/User');
require('../models/Carrinho');
require('../models/Pagamento');
require('../models/Entrega');

module.exports = mongoose;
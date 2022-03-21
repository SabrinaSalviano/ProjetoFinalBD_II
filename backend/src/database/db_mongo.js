const mongoose = require('mongoose');

mongoose.connect('mongodb://172.20.0.2:27017/posts',{useNewUrlParser: true, useUnifiedTopology: true});

require('../models/Product');
require('../models/User');
require('../models/Carrinho');

module.exports = mongoose;
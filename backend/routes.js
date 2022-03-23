const express = require('express');

const controllerUser = require('./src/controllers/controllerUser');
const ControllerProduct = require('./src/controllers/ControllerProduct');
const controllerEntrega = require('./src/controllers/controllerEntrega');
const controllerPagamento = require('./src/controllers/controllerPagamento');
const controllerCarrinho = require('./src/controllers/controllerCarrinho');

const redis = require('./src/database/db_redis');
const pg = require('./src/database/database');

const routes = express.Router();

routes.post('/product', ControllerProduct.create);
routes.get('/product', ControllerProduct.list);
routes.get('/product/:tipo', ControllerProduct.listByType);

routes.post('/pagamento', controllerPagamento.create);
routes.get('/getpagamento', controllerPagamento.list);

routes.post('/entrega', controllerEntrega.create);
routes.get('/getentrega', controllerEntrega.list);

routes.post('/users', controllerUser.create);
routes.get('/getusers', controllerUser.list);

routes.post('/carrinho', controllerCarrinho.create);
routes.get('/getcarrinho', controllerCarrinho.list);
routes.put('/carrinho/:id', controllerCarrinho.update);
routes.delete('/carrinho/:id', controllerCarrinho.delete);

routes.post('/sessao', redis.addToRedis);
routes.get('/sessao/:email', redis.getSessao);


routes.post('/ponto', pg.addPonto);
routes.get('/getponto', pg.getPonto);


module.exports = routes;
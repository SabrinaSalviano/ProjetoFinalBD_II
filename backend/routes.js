const express = require('express');

const controllerUser = require('./src/controllers/ControllerUser');
const redis = require('./src/databases/db_redis');
const pg = require('./src/database/database');

const routes = express.Router();

routes.post('/users', controllerUser.create);
routes.get('/users', controllerUser.getUsers);
routes.put('/users/:id', controllerUser.update);
routes.delete('/users/:id', controllerUser.delete);

routes.post('/sessao', redis.addToRedis);
routes.get('/sessao/:email', redis.getSessao);


routes.post('/ponto', pg.addPonto);
routes.get('/getponto', pg.getPonto);


module.exports = routes;
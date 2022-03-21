const express = require('express');
const db = require('./database/database');
const routes = require('./routes');
const redis = require('./src/databases/db_redis');


const app = express();
app.use(express.json());
app.use(routes);
const port = 3001;

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`);
});

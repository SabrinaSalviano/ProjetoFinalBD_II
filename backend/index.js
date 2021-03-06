const express = require('express');
const db = require('./src/database/database');
const cors = require('cors');
const routes = require('./routes');
const redis = require('./src/database/db_redis');


const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
const port = 3001;

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`);
});

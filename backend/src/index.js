const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(routes);

//subir na porta 3333
app.listen(3333, () => console.log('running'));
const http = require('http');
const express = require('express');
const itemsRouter = require('../controller/items.js');
const app = express();

app.use(express.json());
app.use('/', itemsRouter);

const server = http.createServer(app);
const port = 3001;
server.listen(port);
console.debug('Server listening on port ' + port);

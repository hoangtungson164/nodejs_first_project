const http = require('http');
const express = require('express');
const itemsRouter = require('../controller/itemsController.js');
const loginRouter = require('./controller/userController.js');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/', itemsRouter);
app.use('/login', loginRouter);

const server = http.createServer(app);
const port = 3001;
server.listen(port);
console.debug('Server listening on port ' + port);

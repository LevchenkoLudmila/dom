const express = require('express');
const path = require('path');
const server = express();

const fs = require('fs');

const mainRouter = require('./routes/main.js');
server.use(express.static('./public'));

server.set('view engine', 'ejs');
server.set('views','./views');



server.use('/', mainRouter);

server.listen (3000);

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
//database setup 
mongoose.connect('mongodb://localhost/auth');
const connection = mongoose.connection;
 
//app setup
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }))
router(app);
//server setup
const port = process.env.Port || 3090;
const server = http.createServer(app);
server.listen(port);

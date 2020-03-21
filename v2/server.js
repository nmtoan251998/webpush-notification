const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');

const { PORT } = require('./config/env');

// initialize app instance
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(logger('dev'));

// static folder
app.use(express.static(path.join(__dirname, './client')));

// start app
app.listen(PORT, () => console.log(`Server is started on port: ${PORT}`));
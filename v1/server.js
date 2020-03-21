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

// routes
app.get('/subscribe', (req, res) => res.sendFile(path.join(__dirname, './client/subscribe.html')));
app.get('/unsubscribe', (req, res) => res.sendFile(path.join(__dirname, './client/unsubscribe.html')));
app.get('/like', (req, res) => res.sendFile(path.join(__dirname, './client/like.html')));
app.get('/follow', (req, res) => res.sendFile(path.join(__dirname, './client/follow.html')));
app.get('/system', (req, res) => res.sendFile(path.join(__dirname, './client/system.html')));

app.use(require('./notification.route'));

// start app
app.listen(PORT, () => console.log(`Server is started on port: ${PORT}`));


var admin = require("firebase-admin");

var serviceAccount = require("./config/serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://knowllipop.firebaseio.com",
});

const firestore = admin.firestore();


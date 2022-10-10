'use strict';

const express               = require('express');
const bodyParser            = require('body-parser');
const path                  = require('path');
const firebase              = require('./firebase.js');
const configs               = require('./configuration');
const session               = require('client-sessions');
const NodeCache             = require('node-cache');
const cors = require('cors');

var app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(session({
    cookieName: configs.cookiename,
    secret: configs.cookiesecret,
    duration: 60 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
}));
app.use(express.static(configs.basePublic, {
    maxage: configs.oneDay * 21
}));
app.use(cors({
    origin: configs.allowedOrigins
}));

var nodeCache = new NodeCache({ 
    stdTTL: 0, 
    checkperiod: 604800,
    useClones: true
});

var apiController = require(path.join(configs.baseRoutes, '/api/v1/index.js'));
app.use('/api/v1', apiController);

//  MARK:- Start Server
var httpServer = require('http').createServer(app);
httpServer.setTimeout(configs.timeout);
httpServer.timeout = configs.timeout;
httpServer.agent = false;
httpServer.listen(configs.port, function() {
    console.log(`${configs.siteTitle} is running on port: ${configs.port}.`);
    firebase.setup();
});

module.exports.app = app;
module.exports.cache = nodeCache;
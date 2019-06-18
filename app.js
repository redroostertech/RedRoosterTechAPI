'use strict';

const express               = require('express');
const bcrypt                = require('bcryptjs');
const bodyParser            = require('body-parser');
const path                  = require('path');
const firebase              = require('./firebase.js');
const aws                   = require('./aws.js');
const configs               = require('./configs');
const fs                    = require('fs');
const session               = require('client-sessions');
const nodemailer            = require('nodemailer');
const randomstring          = require('randomstring');
const xoauth2               = require('xoauth2');
const NodeCache             = require('node-cache');

var oneDay                  = configs.oneDay;
var port                    = process.env.PORT || configs.port;
var jwtsec                  = process.env.JWT_SECRET || configs.secret;
var nodemailerUsr           = process.env.NODEMAIL_USR || configs.nodemailusr;
var nodemailerPass          = process.env.NODEMAIL_PSW || configs.nodemailpass;
var nodemailerClientID      = process.env.NODEMAIL_CLIENT || configs.nodemailerclientid;
var nodemailerClientSecret  = process.env.NODEMAIL_CLIENTSEC || configs.nodemailerclientsecret;
var nodemailerClientToken   = process.env.NODEMAIL_REFTOKEN || configs.nodemailerclienttoken;
var siteTitle               = process.env.SITE_TITLE || configs.siteTitle;

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({
    cookieName: process.env.COOKIENAME || configs.cookiename,
    secret: process.env.COOKIESEC || configs.cookiesecret,
    duration: 60 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
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
httpServer.agent= false;
httpServer.listen(port, function() {
    console.log('DadHive running on port ' + port + '.');
    firebase.setup();
});

module.exports.port = port;
module.exports.firebase = firebase;
module.exports.cache = nodeCache;
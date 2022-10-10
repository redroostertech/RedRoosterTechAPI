'use strict';

let config = require('./configuration');
let admin = require('firebase-admin');
let serviceAccount = require(config.firstoragefilename);
let Logger = require('./Logger');

var firebaseService;
var firebaseDB;

class FirebaseService {

    static init(config, serviceAccount) {
        return new FirebaseService(config, serviceAccount);
    }

    constructor(config, serviceAccount) {
        this.config = config;
        this.serviceAccount = serviceAccount;
    }

    initializeFirebase(callback) {
        let config = this.config;
        let serviceAccount = this.serviceAccount;

        !admin.apps.length ? admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: config.firDbUrl,
            storageBucket: config.firStorageBucket
        }) : admin.app();

        this.firDB = admin.firestore().settings({ timestampsInSnapshots: true });
        this.firAdmin = admin;

        if (admin.apps.length > 0) {
            Logger.logMessage(`🚀🚀🚀 Firebase completed initialization successfully!`);
        }
        callback(admin);
    }
}

module.exports.initializeFirebase = function() {
    Logger.logMessage(`◢◤◢◤◢◤ Initializing firebase...`);
    const service = new FirebaseService(config, serviceAccount);
    service.initializeFirebase(function(firebaseAdmin) {
        firebaseService = firebaseAdmin;
        firebaseDB = firebaseAdmin.firestore();
    });
}

module.exports.firebaseService = firebaseService;
module.exports.db = function() {
    return firebaseDB;
}
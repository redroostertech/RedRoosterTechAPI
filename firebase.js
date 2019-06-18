'use strict';

var firebase            = require('firebase');
var admin               = require('firebase-admin');
var configs             = require('./configs');
var serviceAccount      = require(configs.firstoragefilename);  //  MARK:- Uncomment and provide url to service account .json file.
const {Storage}         = require('@google-cloud/storage');

require("firebase/auth");
require("firebase/database");
require("firebase/messaging");
require("firebase/functions");
require("firebase/storage");

//  MARK:- Setup Firebase App
var firebaseObj;
var firebaseAdmin;
var firbaseStorage;
var firebaseFirestoreDB; 
var firebaseRealtimeDB;

var settings = { timestampsInSnapshots: true };
var firebase_configuration = {
    apiKey: process.env.FIRAPIKEY || configs.firapikey,
    authDomain: process.env.FIRDOM || configs.firauthdomain,
    databaseURL: process.env.FIRDBURL || configs.firdburl,
    projectId: process.env.FIRPROJ || configs.firprojectid,
    storageBucket: process.env.FIRSTOR || configs.firstoragebucket,
    messagingSenderId: process.env.FIRMES || configs.firmessagingsenderid,
};

function setupFirebaseApp(callback) {
    if (!firebase.apps.length) {
        firebaseObj = firebase.initializeApp(firebase_configuration);
    } else {
        firebaseObj = firebase.app();
    }
    callback();
}

function setupAdminFirebaseApp(callback) {
    firebaseAdmin = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: configs.firebaseDatabaseUrl,
        storageBucket: configs.firebaseStorageBucket
    });
    callback();
}

function setupRealtimeDB(callback) {
    firebaseRealtimeDB = firebase.database();
    callback();
}

function setupFirestoreDB(callback) {
    firebaseFirestoreDB = admin.firestore()
    firebaseFirestoreDB.settings(settings);
    callback();
}

function setupFirebaseStorage(callback) {
    firbaseStorage = new Storage({
        projectId: configs.firebaseProjectId,
        keyFilename: configs.firstoragefilename
    });
}

module.exports.setup = function firebaseSetup() {
    console.log('Setting up Firebase');
    setupFirebaseApp(function() {
        console.log('Completed setting up base firebase app');
    });
    setupAdminFirebaseApp(function() {
        console.log('Completed setting up base firebase admin app');
    });
    setupRealtimeDB(function() {
        console.log('Completed setting up base realtime db');
    });
    setupFirestoreDB(function() {
        console.log('Completed setting up base firebase firestore db');
    });
    setupFirebaseStorage(function() {
        console.log('Completed setting up base firebase storage app');
    });
};
module.exports.firebase_main = function returnFirebaseMainObject(callback) {
    callback(firebaseObj);
}
module.exports.firebase_admin = firebaseAdmin;
module.exports.firebase_firestore_db = function setupFirestore(callback) {
    callback(firebaseFirestoreDB);
}
module.exports.firebase_realtime_db = function setupRealtimeDB(callback) {
    callback(firebaseObj.database());
}
module.exports.firebase_auth = function setupAuth(callback) {
    callback(firebaseObj.auth());
}
module.exports.firebase_storage = function setupStorage(callback) {
    callback(firbaseStorage.bucket(configs.firstoragebucket));
}
// module.exports.firebase_storage_bucket = firPrimaryStorageBucket;
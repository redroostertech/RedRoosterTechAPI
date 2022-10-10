'use strict';

let dotenv = require('dotenv');
dotenv.config();
const path = require('path');

module.exports = {
    port: process.env.PORT || 3000,
    siteTitle: process.env.SITE_TITLE || 'RedRooster Tech API',
    base: __dirname,
    basePublic: path.join(__dirname, '/public/'),
    baseRoutes: path.join(__dirname, '/routes/'),
    baseViews: path.join(__dirname, '/views/'),
    url: process.env.MONGODB_URL || 'mongodb://dadhive-ad:Z@r@rox6@dadhive-cluster-sm-shard-00-00-1io7q.mongodb.net:27017,dadhive-cluster-sm-shard-00-01-1io7q.mongodb.net:27017,dadhive-cluster-sm-shard-00-02-1io7q.mongodb.net:27017/test?ssl=true&replicaSet=DadHive-Cluster-sm-shard-0&authSource=admin&retryWrites=true/dadhive-main-20193f0912h309',
    secret: process.env.JWT_SECRET || 'wjiofn349w84h93w8hg4nilrwubg4p983h402pqh',
    nodemailusr: process.env.NODEMAIL_USR || "",
    nodemailpass: process.env.NODEMAIL_PSW || "",
    nodemailerclientid: process.env.NODEMAIL_CLIENT || "",
    nodemailerclientsecret: process.env.NODEMAIL_CLIENTSEC || "",
    nodemailerclienttoken: process.env.NODEMAIL_REFTOKEN || "",
    cookiename: process.env.SESSION_NAME || "RRTecheioanfswhp498ebnosi4bflnebur98",
    cookiesecret: process.env.SESSION_SECRET || "SIuebnoiauwbrp9e8br9iubffeiourbnfeoib",
    firapikey: process.env.FIREBASE_API_KEY || "AIzaSyDfs0Sns3nvgxHilXwH8G9jFwP9DdhFqt0",
    firauthdomain: process.env.FIREBASE_AUTH_DOMAIN || "redroostertechapi.firebaseapp.com",
    firdburl:process.env.FIREBASE_DB_URL || "https://redroostertechapi.firebaseio.com",
    firprojectid: process.env.FIREBASE_PROJECT_ID || "redroostertechapi",
    firstoragebucket: process.env.FIREBASE_STORAGE_BUCKET || "redroostertechapi.appspot.com",
    firmessagingsenderid: process.env.FIREBASE_MESSAGING_SENDER_ID || "531404057114",
    firappid: process.env.FIREBASE_APP_ID || "1:531404057114:web:b8d7c8d6e5bfe187",
    firstoragefilename: process.env.FIREBASE_STORAGE_FILENAME || './redroostertechapi-firebase-adminsdk-e20p4-567fe38b18.json',
    s3AccessKey: process.env.AWS_S3_ACCESS_KEY || '',
    s3SecretKey: process.env.AWS_S3_SECRET_KEY || '',
    s3bucket: process.env.AWS_S3_BUCKET || '',
    isLive: false,
    oneDay: 86400000,
    timeout: Number(process.env.TIMEOUT) || 72000000,
    allowedOrigins: process.env.ALLOWED_ORIGINS
}
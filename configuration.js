'use strict';

let dotenv = require('dotenv');
dotenv.config();
const path = require('path');

module.exports = {
    port: process.env.PORT || 3000,
    siteTitle: process.env.SITE_TITLE || 'RedRooster Tech API',
    host: process.env.HOST || 'localhost',
    base: __dirname,
    basePublic: path.join(__dirname, '/public/'),
    baseRoutes: path.join(__dirname, '/routes/'),
    baseViews: path.join(__dirname, '/views/'),
    url: process.env.MONGODB_URL || '',
    secret: process.env.JWT_SECRET || 'wjiofn349w84h93w8hg4nilrwubg4p983h402pqh',
    nodemailusr: process.env.NODEMAIL_USR || '',
    nodemailpass: process.env.NODEMAIL_PSW || '',
    nodemailerclientid: process.env.NODEMAIL_CLIENT || '',
    nodemailerclientsecret: process.env.NODEMAIL_CLIENTSEC || '',
    nodemailerclienttoken: process.env.NODEMAIL_REFTOKEN || '',
    cookiename: process.env.SESSION_NAME || 'RRTecheioanfswhp498ebnosi4bflnebur98',
    cookiesecret: process.env.SESSION_SECRET || 'SIuebnoiauwbrp9e8br9iubffeiourbnfeoib',
    firapikey: process.env.FIREBASE_API_KEY || 'AIzaSyBubgBNlrDL2vIpROq77nupfPRxFipqppQ',
    firauthdomain: process.env.FIREBASE_AUTH_DOMAIN || 'redroostertec-api.firebaseapp.com',
    firdburl:process.env.FIREBASE_DB_URL || 'https://redroostertechapi.firebaseio.com',
    firprojectid: process.env.FIREBASE_PROJECT_ID || 'redroostertec-api',
    firstoragebucket: process.env.FIREBASE_STORAGE_BUCKET || 'redroostertec-api.appspot.com',
    firmessagingsenderid: process.env.FIREBASE_MESSAGING_SENDER_ID || '282864030434',
    firappid: process.env.FIREBASE_APP_ID || '1:282864030434:web:a9fed9a0afcf2275f244bb',
    firstoragefilename: process.env.FIREBASE_STORAGE_FILENAME || './redroostertec-api-firebase-adminsdk-vt4ig-6c9c8dfd40.json',
    s3AccessKey: process.env.AWS_S3_ACCESS_KEY || '',
    s3SecretKey: process.env.AWS_S3_SECRET_KEY || '',
    s3bucket: process.env.AWS_S3_BUCKET || '',
    isLive: false,
    oneDay: 86400000,
    timeout: Number(process.env.TIMEOUT) || 72000000,
    allowedOrigins: process.env.ALLOWED_ORIGINS
}
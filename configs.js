'use strict';

const path          = require('path');

module.exports = {
    port: 3000,
    siteTitle: 'RedRooster Tech API',
    base: __dirname,
    basePublic: path.join(__dirname, '/public/'),
    baseRoutes: path.join(__dirname, '/routes/'),
    baseViews: path.join(__dirname, '/views/'),
    url: 'mongodb://dadhive-ad:Z@r@rox6@dadhive-cluster-sm-shard-00-00-1io7q.mongodb.net:27017,dadhive-cluster-sm-shard-00-01-1io7q.mongodb.net:27017,dadhive-cluster-sm-shard-00-02-1io7q.mongodb.net:27017/test?ssl=true&replicaSet=DadHive-Cluster-sm-shard-0&authSource=admin&retryWrites=true/dadhive-main-20193f0912h309',
    secret: 'wjiofn349w84h93w8hg4nilrwubg4p983h402pqh',
    nodemailusr: "",
    nodemailpass: "",
    nodemailerclientid: "",
    nodemailerclientsecret: "",
    nodemailerclienttoken: "",
    cookiename: "RRTecheioanfswhp498ebnosi4bflnebur98",
    cookiesecret: "SIuebnoiauwbrp9e8br9iubffeiourbnfeoib",
    firapikey: "AIzaSyDfs0Sns3nvgxHilXwH8G9jFwP9DdhFqt0",
    firauthdomain: "redroostertechapi.firebaseapp.com",
    firdburl: "https://redroostertechapi.firebaseio.com",
    firprojectid: "redroostertechapi",
    firstoragebucket: "redroostertechapi.appspot.com",
    firmessagingsenderid: "531404057114",
    firappid: "1:531404057114:web:b8d7c8d6e5bfe187",
    firstoragefilename: './redroostertechapi-firebase-adminsdk-e20p4-567fe38b18.json',
    s3AccessKey: '',
    s3SecretKey: '',
    s3bucket: '',
    isLive: false,
    oneDay: 86400000,
    timeout: 72000000
}
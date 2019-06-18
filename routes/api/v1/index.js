const express                           = require('express');
const router                            = express.Router();
const main                              = require('../../../app');
const bodyParser                        = require('body-parser');
const path                              = require('path');
const session                           = require('client-sessions');
const ok                                = require('async');
const randomstring                      = require('randomstring');
const formidable                        = require('formidable');
const _                                 = require('underscore');
const mime                              = require('mime');
const configs                           = require('../../../configs');

//  Add projects below
const apiFunctions                      = require('../../functions/index');

const oneDay                            = configs.oneDay;

router.use(express.static(configs.basePublic, {
    maxage: oneDay * 21
}));
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());
router.use(session({
    cookieName: process.env.COOKIENAME || configs.cookiename,
    secret: process.env.COOKIESEC || configs.cookiesecret,
    duration: 60 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
}));

router.get('/test', function(req, res) {
    res.json({
        "text" : "Test GET request."
    })
});

router.post('/login', function( req, res ) {
    console.log(req.body);
    apiFunctions.signin(req, res);
});

router.get('/getUsers', function(req, res) {
    console.log(req.body);
    apiFunctions.getUsers(req, res);
});

router.post('/getUser', function(req, res) {
    console.log(req.body);
    apiFunctions.getUserWithId(req.body.userId, res);
});

router.post('/createUser', function(req, res) {
    apiFunctions.signup(req, res, function(uid) {
        if (uid === null) { 
            var error = {
                "code": 200,
                "message": "Something went wrong. Please try again later."
            }
            console.log(error);
            apiFunctions.sendResponse(200, error, null, null, res)
        } else {
            req.body.uid = uid
            req.body.type = "1"
            apiFunctions.createUser(req, res);
        }
    });
});

router.post('/createMatch', function(req, res) {
    console.log(req.body);
    apiFunctions.createMatch(req, res);
});

router.post('/findMatch', function(req, res) {
    console.log(req.body);
    apiFunctions.findMatch(req, res);
});

router.post('/findConversations', function(req, res) {
    console.log(req.body);
    apiFunctions.findConversations(req, res);
});

router.post('/findConversation', function(req, res) {
    console.log(req.body);
    apiFunctions.findConversation(req.body.conversationId, res);
});

router.post('/getMessages', function(req, res) {
    console.log(req.body);
    apiFunctions.getMessagesInConversation(req.body.conversationId, res);
});

router.post('/sendMessage', function(req, res) {
    console.log(req.body);
    apiFunctions.sendMessage(req, res);
});

router.post('/updateConversation', function(req, res) {
    console.log(req.body);
    apiFunctions.updateConversation(req, res);
});

router.post('/uploadPhoto', function(req, res) {

    var form = new formidable.IncomingForm();
    var imageData = {};

    form.parse(req, function (err, fields, files) {
        if (!err) {
            console.log(fields);
            var finished = _.after(parseInt(fields.imageCount), check);
            main.firebase.firebase_storage(function(firebase) {
                for (i = 0; i < parseInt(fields.imageCount); i++) {
                    var file = files[fields.imageCount+(i+1)];
                    var fileMime = mime.getType(file.name);
                    var fileExt = mime.getExtension(file.type);
                    var uploadTo = 'images/' + fields.userId + '/' + 'profileImage'+(i+1) + '.' + fileExt;
                    firebase.upload(file.path, { 
                        destination: uploadTo,
                        public: true,
                        metadata: {
                            contentType: fileMime,
                            cacheControl: "public, max-age=300"
                        }
                    }, function(err, file) {
                        if (err) { 
                            console.log('Error uploading file: ' + err);
                            finished();
                        } else {
                            var count = i+1;
                            imageData["userProfilePicture_"+count+"_url"] = apiFunctions.createPublicFileURL(uploadTo); 
                            imageData["userProfilePicture_"+count+"_meta"] = null;
                            finished();
                        }
                    });
                }
            });

            function check() {
                apiFunctions.uploadPicture(imageData, res);
            }

        }
    });
});

router.post('/saveLocation', function(req, res) {
    console.log(req.body);
    apiFunctions.saveLocationMongoDB(req, res);
});

router.post('/updateUserLocation', function(req, res) {
    console.log(req.body);
    apiFunctions.saveLocationMongoDB(req, res);
});

router.post('/getGroupMessages', function(req, res) {
    console.log(req.body);
    apiFunctions.getGroupMessages(req, res);
})

router.post('/getNearbyUsers', function(req, res) {
    console.log(req.body);
    apiFunctions.getUsersMongoDB(req, res);
});

router.post('/addToMap', function(req, res) {
    console.log(req.body);
    apiFunctions.createMapItem(req, res, function(itemId) {
        req.body.itemId = itemId
        apiFunctions.addToMap(req, res);
    });
});

router.post('/retrieveForMap', function(req, res) {
    console.log(req.body);
    apiFunctions.retrieveForMap(req, res);
});

router.get('/deleteAllGeos', function(req, res) {
    console.log(req.body);
    apiFunctions.deleteAllMongoUserGeoElements(req, res);
});

router.post('/deleteGeo', function(req, res) {
    console.log(req.body);
    apiFunctions.deleteGeo(req, res);
});

router.post('/deleteGeosBut', function(req, res) {
    req.body.ids = ["5cf87bf7178341c6ca36ca92", "5cf87f3c178341c6ca37481b"];
    apiFunctions.deleteGeosBut(req, res);
})

router.get('/deleteAllActions', function(req, res) {
    console.log(req.body);
    apiFunctions.deleteAllMongoActionElements(req, res);
});

router.post('/deleteAction', function(req, res) {
    console.log(req.body);
});

module.exports = router;
const Firebase  = require('../../firebase');
const Collections = require('./collections');
const Errors = require('./errors');

module.exports.add = function(data, callback) {
    let reference = Firebase.db();
    if (!reference) return callback({
        'message': 'Sorry! Something went wrong. Please try again later.' 
    }, null);
    let collection = Collections.inquiries(reference);
    collection.add(data).then(function(documentReference) {
        data.key = documentReference.id;
        callback(null, data);
    })
    .catch(function (error) {
        callback(error, null);
    });
}
module.exports.generic = {
    error: { "errorCode": 200, "errorMessage": "Something went wrong." },
    empty: { "errorCode" : null, "errorMessage" : null },
    success: { "result" : true, "message" : "Request was successful" },
    failure: { "result" : false, "message" : "Request was unsuccessful" }
}

module.exports.invalidPageFailure = { "errorCode": 200, "errorMessage" : "Invalid page number, should start with 1" };

module.exports.getOptions = { source: 'cache' };
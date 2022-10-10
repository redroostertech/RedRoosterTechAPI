let configs = require('./configuration');

module.exports.logEvent = (message, request, response, next) => {
    if (!configs.isLive) {
        console.log(message)
    }
    next();
}

module.exports.logRequest = function(request, response, next) {
    if (!configs.isLive) {
        console.log(`
        Request Logger
        ==============
        Hostname: ${ request.hostname } 
        Url: ${ request.baseUrl }
        Path: ${ request.path }
        Body: ${ JSON.stringify(request.body) }
        Params: ${ JSON.stringify(request.params) }
        Query: ${ JSON.stringify(request.query) }
        ==============
        Sent at: ${ new Date() }
        `)
    }
    next();
};

module.exports.logMessage = (message) => {
    if (!configs.isLive) {
        console.log(message)
    }
};
const Randomstring = require('randomstring');
const FirebaseManager = require('./Firebase+Helpers');

module.exports.submitInquiry = function(name, email, phone, message, company, response) {
    let inquiry = {
        id: Randomstring.generate(26),
        name: name,
        email: email,
        phone: phone,
        message: message,
        company: company,
        createdAt: new Date()
    }

    FirebaseManager.addInquiry(inquiry, function(error, results) {
        if (error) return response.status(200).json({
            'status': 200,
            'success': false,
            'data': null,
            'error_message': error.message 
        });

        response.status(200).json({
            'status': 200,
            'success': true,
            'data': {
                'inquiry': results
            },
            'error_message': null
        });
    });
}

module.exports.joinNewsletter = function(email, response) {
    let recipient = {
        id: Randomstring.generate(26),
        email: email,
        createdAt: new Date()
    }

    FirebaseManager.joinNewsletter(recipient, function(error, results) {
        if (error) return response.status(200).json({
            'status': 200,
            'success': false,
            'data': null,
            'error_message': error.message 
        });

        response.status(200).json({
            'status': 200,
            'success': true,
            'data': {
                'inquiry': results
            },
            'error_message': null
        });
    });
}
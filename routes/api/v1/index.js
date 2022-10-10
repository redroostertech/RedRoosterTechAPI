const express = require('express');
const router = express.Router();
const apiFunctions = require('../../functions/index');

router.get('/test', function(request, response) {
    res.json({
        "text" : "Test GET request."
    })
});

router.post('/leads/submitInquiry', function(request, response) {
    let name = request.body.name;
    let email = request.body.email;
    let phone = request.body.phone;
    let message = request.body.message;

    console.log(request);

    if (!name || !email || !phone || !message) return response.status(200).json({
        'status': 200,
        'success': false,
        'data': null,
        'error_message': 'Something went wrong. Please try again.' 
    });

    apiFunctions.submitInquiry(name, email, phone, message, response);
});

module.exports = router;
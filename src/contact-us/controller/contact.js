'use strict';

const { contactUsEmail, contactUsEmailToUser } = require('./../../util/mailer');

function sendEmail(req, res) {
    console.log(req.body);
    contactUsEmailToUser(req.body)
        .then(data => {
            return contactUsEmail(req.body);
        }).then(data => {
            return res.status(200)
                .send({ message: 'Thank you for contacting us '+req.body.name+'. We will contact you soon.' });
        }).catch(err => {
            return res.status(400)
                .send({ message: 'Something went wrong please try again later!' });
        })
}

module.exports = sendEmail;
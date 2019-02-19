'use strict';

let nodemailer = require('nodemailer');
let config = require('./../../../config/email');
const env = process.env;

let transport = nodemailer.createTransport({
    host: config.HOST,
    port: 587,
    secure: false, // use TLS
    auth: {
        user: config.FROM_ACCOUNT,
        pass: config.FROM_PASSWORD
    }
});

function contactUsEmail(body) {
    let date = new Date();
    let dataToOwner = {
        from: config.FROM_ACCOUNT,
        to: config.TO_OWNER,
        subject: 'Contact',
        html: config.HTML_CLIENT + ' , <br>One User send a mail regarding query. Please contact on following details. <br><h4>========User Details========</h4><br>' +
            'USER NAME: ' + body.name + '<br> EMAIL ID: ' + body.email + '<br>MESSAGE : ' + body.message + '<h4>--------Thank You---------<br>Date and Time: ' + date + '</h4>'
    };
    return new Promise((resolve, reject) => {
        transport.sendMail(dataToOwner, function (err) {
            if (err) {
                return reject(err);

            }
            return resolve({ message: 'Operation Successfully executed.' });
        });

    })

}

function contactUsEmailToUser(body) {
    let date = new Date();
    let dataToOwner = {
        from: config.FROM_ACCOUNT,
        to: body.email,
        subject: 'Contact',
        html: `Thank you for contacting us `+body.name+`. We will get back to you soon.`
    };
    return new Promise((resolve, reject) => {
        transport.sendMail(dataToOwner, function (err) {
            if (err) {
                return reject(err);

            }
            return resolve({ message: 'Operation Successfully executed.' });
        });

    })

}

module.exports.contactUsEmail = contactUsEmail;
module.exports.contactUsEmailToUser = contactUsEmailToUser;
'use strict';
const express = require('express');

const { sendEmail } = require('./controller');

let contactRouter = express.Router();

contactRouter.route('/')
    .post(sendEmail);

module.exports = contactRouter;

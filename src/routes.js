'use strict';
const express = require('express');

const { errorHandler } = require('./error_handler/error.handler');
const { contactRouter } = require('./contact-us');


let mainRouter = express.Router();
mainRouter.use('/contact', contactRouter);

mainRouter.use(errorHandler);

module.exports = mainRouter;

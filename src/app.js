'use strict';
const http = require('http');

const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const env = process.env;

const { SERVER: SERVER_CONFIG } = require('../config');
const mainRouter = require('./routes');

function start(app) {
    app = _initializeServer(app);

    let promise = new Promise((resolve, reject) => {
        _createServer(app)
            .then((data) => {
                console.info(data.message);
                resolve({
                    message: 'Server Started Successfully'
                });
            })
            .catch((err) => {
                console.error(err.message);
                reject(err);
            });
    });
    return promise;
}

function _initializeServer(app) {
    // Modified cors, In production api u can't use from outside.
    if (env.NODE_ENV !== 'production') {
        app.use(cors());
    }
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(logger('dev'));
    app.use('/api', mainRouter);
    return app;
}

function _createServer(app) {
    let promise = new Promise((resolve) => {
        let server = http.createServer(app);
        server.listen(SERVER_CONFIG.PORT, () => {
            return resolve({
                message: `Server Running on port :: ${server.address().port}`
            });
        });
    });
    return promise;
}

exports.start = start;

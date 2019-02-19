'use strict';
const env = process.env;

switch (env.NODE_ENV) {
    case 'production':
        exports.PROTOCOL = 'https';
        exports.HOST = '127.0.0.1';
        exports.PORT = '8084';
        exports.CONSOLE = false;
        break;
    case 'stage':
        exports.PROTOCOL = 'http';
        exports.HOST = '127.0.0.1';
        exports.PORT = '8085';
        exports.CONSOLE = false;
        break;
    default:
        exports.PROTOCOL = 'http';
        exports.HOST = '127.0.0.1';
        exports.PORT = '8084';
        exports.CONSOLE = true;
}

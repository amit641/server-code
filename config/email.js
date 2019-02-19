'use strict';
const env = process.env;
switch (env.NODE_ENV) {
    case 'production':
        {
            exports.HOST = 'smtp.gmail.com';
            exports.FROM_ACCOUNT = 'xxxx';
            exports.FROM_PASSWORD = 'xxxxx';
            exports.TO_OWNER = 'xxxxx';
            exports.TO_OWNER_CC = '';
            exports.SUBJECT_CLIENT = 'Welcome to XXXXX';
            exports.HTML_CLIENT = '<h2>Welcome From XXXX</h2><br>Hi';
            exports.SUBJECT_RESET_PASSWORD = 'XXXX Account Password Reset';
            exports.SUBJECT_CHANGE_PASSWORD = 'Your password has been changed';
            break;
        }
    case 'stage':
        {
            exports.HOST = 'smtp.gmail.com';
            exports.FROM_ACCOUNT = 'octraxtest@gmail.com';
            exports.FROM_PASSWORD = 'naman@1212';
            exports.TO_OWNER = 'aditya.tripathy@shopx.in';
            exports.TO_OWNER_CC = '';
            exports.SUBJECT_CLIENT = 'Welcome to XXXXX';
            exports.HTML_CLIENT = '<h2>Welcome From XXXX</h2><br>Hi';
            exports.SUBJECT_RESET_PASSWORD = 'XXXX Account Password Reset';
            exports.SUBJECT_CHANGE_PASSWORD = 'Your password has been changed';
            break;
        }
    default:
        {
            exports.HOST = 'smtp.gmail.com';
            exports.FROM_ACCOUNT = 'octraxtest@gmail.com';
            exports.FROM_PASSWORD = 'naman@1212';
            exports.TO_OWNER = 'aditya.tripathy@shopx.in';
            exports.TO_OWNER_CC = '';
            exports.SUBJECT_CLIENT = 'Welcome to XXXXX';
            exports.HTML_CLIENT = '<h2>Welcome From XXXX</h2><br>Hi';
            exports.SUBJECT_RESET_PASSWORD = 'XXXX Account Password Reset';
            exports.SUBJECT_CHANGE_PASSWORD = 'Your password has been changed';
            break;
        }
}

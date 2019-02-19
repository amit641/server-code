'use strict';

function errorHandler(err, req, res, next) {
    if (err) {
        let errorname = err.name;
        let erromessage = err.message;
        console.log('Error Name = ', errorname);
        console.log('Error Message = ', erromessage);
        switch (errorname) {
            case 'customerror':
                {
                    let customerr = {
                        validFlag: false,
                        responseString: err.message
                    };
                    res.status(400)
                    .json(customerr);
                    break;
                }
            case 'ValidationError':
                {
                    let validationerror = handleValidationError(err);
                    res.status(validationerror.status)
                    .json({ validFlag: false, responseString: validationerror.message });
                    break;
                }
            case 'CastError':
                {
                    let casteingrror = HandleCastError(err);
                    res.status(casteingrror.status)
                    .json({ validFlag: false, responseString: casteingrror.message });
                    break;
                }
            case 'ReferenceError':
                {
                    res.status(500)
                    .json({
                        validFlag: false,
                        responseString: 'internal server error',
                        error: 'Unknow Reference Error'
                    });
                    break;
                }
            case 'TypeError':
                {
                    res.status(500)
                    .json({
                        validFlag: false,
                        responseString: 'Internal Server Error.',
                        error: ''
                    });
                    break;
                }
            case 'invalid_request':
                {
                    let tokenError = {
                        error: 'invalid_request',
                        error_description: err.message
                    };
                    res.status(400).json(tokenError);
                    break;
                }
            case 'TokenError':
                {
                    let tokenError = {
                        error: 'invalid_grant',
                        error_description: err.message
                    };
                    res.status(400).json(tokenError);
                    break;
                }
            case 'Error':
                {
                    res.status(400)
                    .json({
                        validFlag: false,
                        responseString: erromessage
                    });
                    break;
                }
            default:
                {
                    return res.status(500)
                        .json({
                            validFlag: false,
                            responseString: 'Something went wrong. Please try after some time!',
                            error: new Error('unknown error')
                        });
                }
        }
    } else {
        next();
    }
}

//======================================== Helpers for Error Handlers ===========================================

// ------------------------------------- Cast Error -------------------------------------------------------------
function HandleCastError(err) {
    let casterror = new Error();
    casterror.name = 'TypeCast';
    casterror.message = 'cannot cast ' + err.path + ' to ' + err.kind;
    return {
        status: 400,
        message: 'Type Casting failed',
        error: casterror
    };
}

// ------------------------------------- validation Error -------------------------------------------------------
function handleValidationError(err) {
    let error = err.errors;
    let validationKey = null;
    for (let key in error) {
        validationKey = key;
    }
    let customerror = error[validationKey];
    if (customerror.kind === 'Duplicate value') {
        let newError = new Error();
        newError.name = 'validation error';
        newError.message = customerror.message;
        return {
            status: 400,
            message: customerror.message
        };
    } else if (customerror.kind === 'required') {
        let requiredError = new Error();
        requiredError.name = 'validation error';
        requiredError.message = customerror.properties.path + ' is required';
        return {
            status: 400,
            message: requiredError.message
        };
    } else if (customerror.kind === 'user defined') {
        let userError = new Error();
        userError.name = 'validation error';
        userError.message = customerror.message;
        return {
            status: 400,
            message: userError.message
        };
    } else if (customerror.kind === 'enum') {
        let requiredError = new Error();
        requiredError.name = 'validation error';
        requiredError.message = customerror.properties.path + ' is required and only acceptable ' + customerror.properties.enumValues;
        return {
            status: 400,
            name: requiredError.name,
            message: requiredError.message
        };
    } else if (customerror.kind === 'Number') {
        let requiredError = new Error();
        requiredError.name = 'validation error';
        requiredError.message = customerror.message;
        return {
            status: 400,
            name: requiredError.name,
            message: requiredError.message
        };
    } else if (customerror.kind === 'unique') {
        let requiredError = new Error();
        requiredError.name = 'validation error';
        requiredError.message = customerror.message;
        return {
            status: 400,
            name: requiredError.name,
            message: requiredError.message
        };
    } else if (customerror.kind === 'Array') {
        let requiredError = new Error();
        requiredError.name = 'validation error';
        requiredError.message = customerror.message;
        return {
            status: 400,
            name: requiredError.name,
            message: requiredError.message
        };
    } else {
        return {
            status: 500,
            message: 'Internal server error'
        };
    }
}

module.exports.errorHandler = errorHandler;

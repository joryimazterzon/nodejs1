function runMiddleware(req, res, middlewares) {
    let index = 0;
    const next = () => {
        if (index < middlewares.length) {
            const middleware = middlewares[index++];
            middleware(req, res, next);
        }
    }
    next();
}

const middleware1 = (req, res, next) => {
    console.log('middleware1 : authenticating user');
    next();
}

const middleware2 = (req, res, next) => {
    console.log('middleware2 : processing request');
    let httpStatus = Math.floor(Math.random() * 500) + 100;
    let validCode = false;
    if (httpStatus >= 200 && httpStatus < 300) {
        validCode = true;
    } else {
        validCode = false;
    }
    res.validCode = validCode;
    next();
}

const middleware3 = (req, res, next) => {
    console.log('middleware3 : finalizing request');
    if (res.validCode) {
        next();
    } 
}

const middleware4 = (req, res, next) => {
    console.log('middleware4 : sending response');
    next();
}

const req ={}
const res ={ validCode: false };
const middlewares = [middleware1, middleware2, middleware3, middleware4];
runMiddleware(req, res, middlewares);
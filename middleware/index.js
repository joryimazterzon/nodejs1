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
    next();
}

const middleware3 = (req, res, next) => {
    console.log('middleware3 : finalizing request');
    next();
}

const req ={}
const res ={}
const middlewares = [middleware1, middleware2, middleware3];
runMiddleware(req, res, middlewares);
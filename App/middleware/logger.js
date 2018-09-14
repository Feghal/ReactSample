"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function loggerMiddleware(store) {
    return function (next) { return function (action) {
        console.log(action);
        return next(action);
    }; };
}
exports.default = loggerMiddleware;

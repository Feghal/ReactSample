"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var middleware = require('redux-axios-middleware');
exports.default = middleware.multiClientMiddleware({
    default: {
        client: axios_1.default.create({
            baseURL: "https://jsonplaceholder.typicode.com",
            responseType: 'json'
        }),
    }
});

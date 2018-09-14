"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var middleware_1 = require("../middleware");
var reducers_1 = __importDefault(require("../reducers"));
function configureStore(initialState) {
    var middleware = redux_1.applyMiddleware(middleware_1.axios, middleware_1.asyncDispatch, middleware_1.logger);
    return redux_1.createStore(reducers_1.default, initialState, middleware);
}
exports.configureStore = configureStore;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __importDefault(require("../Constants/api"));
var actions_1 = require("../Constants/actions");
function listPhotos() {
    return {
        type: actions_1.App.Photo.List.Request,
        payload: {
            request: {
                url: api_1.default.Photos
            }
        }
    };
}
exports.listPhotos = listPhotos;

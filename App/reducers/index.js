"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var PhotosReducer_1 = __importStar(require("./PhotosReducer"));
exports.ListInitialState = PhotosReducer_1.initialState;
exports.default = redux_1.combineReducers({
    list: PhotosReducer_1.default,
});

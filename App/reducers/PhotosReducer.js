"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var redux_actions_1 = require("redux-actions");
var actions_1 = require("../Constants/actions");
var general_1 = require("../Constants/general");
exports.initialState = {
    status: general_1.ProgressStatus.None,
};
exports.default = redux_actions_1.handleActions((_a = {},
    _a[actions_1.App.Photo.List.Request] = function (state, action) {
        return {
            status: general_1.ProgressStatus.Loading
        };
    },
    _a[actions_1.App.Photo.List.Success] = function (state, action) {
        return {
            status: general_1.ProgressStatus.Success,
            photos: action.payload.data
        };
    },
    _a[actions_1.App.Photo.List.Fail] = function (state, action) {
        console.log("reducer:", action.error.response.data.reason);
        return {
            status: general_1.ProgressStatus.Failed,
            errors: action.error.response.data.reason,
        };
    },
    _a), exports.initialState);

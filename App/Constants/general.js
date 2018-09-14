"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProgressStatus;
(function (ProgressStatus) {
    ProgressStatus[ProgressStatus["None"] = 0] = "None";
    ProgressStatus[ProgressStatus["Loading"] = 1] = "Loading";
    ProgressStatus[ProgressStatus["Success"] = 2] = "Success";
    ProgressStatus[ProgressStatus["Failed"] = 3] = "Failed";
})(ProgressStatus = exports.ProgressStatus || (exports.ProgressStatus = {}));
var Errors;
(function (Errors) {
    Errors["required"] = "This field can't be blank";
})(Errors = exports.Errors || (exports.Errors = {}));

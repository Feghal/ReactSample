"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListItem.prototype.render = function () {
        var item = this.props.item;
        var pic = {
            uri: item.url
        };
        return (react_1.default.createElement(react_native_1.View, { style: { flex: 1, flexDirection: 'row' } },
            react_1.default.createElement(react_native_1.Image, { source: pic, style: styles.imageView }),
            react_1.default.createElement(react_native_1.Text, { style: styles.textView }, item.title)));
    };
    return ListItem;
}(react_1.default.Component));
exports.ListItem = ListItem;
var styles = react_native_1.StyleSheet.create({
    imageView: {
        width: '50%',
        height: 100,
        margin: 7,
        borderRadius: 7
    },
    textView: {
        width: '50%',
        textAlignVertical: 'center',
        padding: 10,
        color: '#000'
    }
});

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
var HomeScreen = /** @class */ (function (_super) {
    __extends(HomeScreen, _super);
    function HomeScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeScreen.prototype.render = function () {
        var navigate = this.props.navigation.navigate;
        return (react_1.default.createElement(react_native_1.View, { style: { flex: 1,
                flexDirection: 'column'
            } },
            react_1.default.createElement(react_native_1.Button, { title: "Go to profile", onPress: function () {
                    return navigate('Profile', { name: 'Jane' });
                } }),
            react_1.default.createElement(react_native_1.Button, { title: "Go to list", onPress: function () {
                    return navigate('List', { name: 'List' });
                } })));
    };
    HomeScreen.navigationOptions = {
        title: 'Welcome',
    };
    return HomeScreen;
}(react_1.default.Component));
exports.HomeScreen = HomeScreen;

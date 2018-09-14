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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var PhotoListActions_1 = require("../../../Actions/PhotoListActions");
var ListItem_1 = require("./ListItem");
var general_1 = require("../../../Constants/general");
var PhotoList = /** @class */ (function (_super) {
    __extends(PhotoList, _super);
    function PhotoList(props) {
        return _super.call(this, props) || this;
    }
    PhotoList.prototype.componentWillMount = function () {
        this.props.listPhotos();
    };
    PhotoList.prototype.render = function () {
        var _this = this;
        var photos = this.props.photos;
        var status = this.props.status;
        if (status !== general_1.ProgressStatus.Success) {
            return (react_1.default.createElement(react_native_1.View, { style: { flex: 1, padding: 20 } },
                react_1.default.createElement(react_native_1.ActivityIndicator, null)));
        }
        var storedPhotos = photos.map(function (photo) { return (__assign({ key: photo.id.toString() }, photo)); });
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.FlatList, { data: storedPhotos, renderItem: function (_a) {
                    var item = _a.item, index = _a.index;
                    return react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { return _this.props.onPressRow(item); } },
                        react_1.default.createElement(ListItem_1.ListItem, { item: item }));
                }, keyExtractor: function (item) { return item.key; } })));
    };
    return PhotoList;
}(react_1.default.Component));
function mapStateToProps(state) {
    return {
        photos: state.list.photos,
        status: state.list.status,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        listPhotos: function () { return dispatch(PhotoListActions_1.listPhotos()); }
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(PhotoList);
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
});

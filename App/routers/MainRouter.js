"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var HomeScreen_1 = require("../Components/Home/HomeScreen");
var ProfileScreen_1 = require("../Components/Profile/ProfileScreen");
var ListScreen_1 = require("../Components/Photo/List/ListScreen");
var DetailScreen_1 = require("../Components/Photo/Detail/DetailScreen");
exports.AppNavigation = react_navigation_1.createStackNavigator({
    Home: { screen: HomeScreen_1.HomeScreen },
    Profile: { screen: ProfileScreen_1.ProfileScreen },
    List: { screen: ListScreen_1.ListScreen },
    Detail: { screen: DetailScreen_1.DetailScreen }
});

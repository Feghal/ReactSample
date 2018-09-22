import {createStackNavigator} from "react-navigation";

import {HomeScreen} from "../Components/Home/HomeScreen";
import {ProfileScreen} from "../Components/Profile/ProfileScreen";
import {ListScreen} from "../Components/Photo/List/ListScreen";
import {DetailScreen} from "../Components/Photo/Detail/DetailScreen";

export const AppNavigation = createStackNavigator({
    Home: { screen: HomeScreen},
    Profile: { screen: ProfileScreen },
    List: { screen: ListScreen },
    Detail: {screen: DetailScreen}
});

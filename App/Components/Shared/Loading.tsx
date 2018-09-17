import {
    ActivityIndicator,
    View
} from "react-native";
import React from "react";
import {Status} from "../../Styles/style";

export class Loading extends React.Component {
    render() {
        return (
            <View style={Status.container}>
                <ActivityIndicator/>
            </View>
        );
    }
}
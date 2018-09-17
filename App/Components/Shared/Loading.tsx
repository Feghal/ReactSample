import {
    ActivityIndicator,
    View
} from "react-native";
import React from "react";

export class Loading extends React.Component {
    render() {
        return (
            <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
            </View>
        );
    }
}
import React from 'react';
import {Component} from 'react';
import {
    ActivityIndicator,
    View
} from "react-native";
import {Status} from "../../Styles/style";

export class Loading extends Component {
    render() {
        return (
            <View style={Status.container}>
                <ActivityIndicator/>
            </View>
        );
    }
}
import {
    Text,
    View
} from "react-native";
import {Component} from 'react';
import React from "react";
import {Status} from "../../Styles/style";

namespace Error {
    export interface OwnProps {
        error: string
    }

    export interface DispatchProps {}

    export interface StateProps {}

    export type Props = OwnProps & DispatchProps & StateProps;
}


export class Error extends Component<Error.Props> {
    render() {
        const error = this.props.error;
        return (
            <View style={Status.container}>
                <Text style={Status.errorTitle}>Error</Text>
                <Text style={Status.errorMessage}>{error}</Text>
            </View>
        );
    }
}
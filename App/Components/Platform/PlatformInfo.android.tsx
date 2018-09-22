import React from 'react'
import {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

namespace PlatformInfo {
    export interface OwnProps {}

    export interface DispatchProps {}

    export interface StateProps {}

    export type Props = OwnProps & DispatchProps & StateProps;
}

export class PlatformInfo extends Component<PlatformInfo.Props> {
    render() {
        return (
            <View style={{flex:1, flexDirection: 'row'}}>
                <Text >{'Android'}</Text>
            </View>
        );
    }
}

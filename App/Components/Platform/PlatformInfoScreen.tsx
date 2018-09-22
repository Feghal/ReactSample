import React from 'react'
import {Component} from 'react';
import {Platform} from 'react-native';
const {PlatformInfo} = require('./PlatformInfo');

namespace PlatformInfoScreen {
    export interface OwnProps {
        navigation: any
    }

    export interface DispatchProps {}

    export interface StateProps {}

    export interface State {}

    export type Props = OwnProps & DispatchProps & StateProps;
}

export class PlatformInfoScreen extends Component<PlatformInfoScreen.Props, PlatformInfoScreen.State> {
    static navigationOptions = {
        title: 'Platform',
    };
    render() {
        return (
            <PlatformInfo/>
        );
    }
}


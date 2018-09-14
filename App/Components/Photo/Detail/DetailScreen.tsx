import React from 'react'

import {
    StyleSheet, Text,
    View,
} from 'react-native';
import Photo from "../../../models/Photo";

namespace DetailScreen {
    export interface OwnProps {
        navigation: any
        photo: Photo
    }

    export interface DispatchProps {}

    export interface StateProps {}

    export interface State {}

    export type Props = OwnProps & DispatchProps & StateProps;
}

export class DetailScreen extends React.Component<DetailScreen.Props, DetailScreen.State> {
    static navigationOptions = {
        title: 'Detail',
    };
    render() {
        const { navigate } = this.props.navigation;
        const photo = this.props.photo;
        return (
            <View style={{flex:1}}>
                <Text>2112121</Text>
            </View>
        );
    }
}



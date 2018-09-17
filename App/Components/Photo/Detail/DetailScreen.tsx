import React from 'react'

import {
    StyleSheet,
} from 'react-native';
import Photo from "../../../Models/Photo";
import PhotoDetail from "./PhotoDetail";

namespace DetailScreen {
    export interface OwnProps {
        navigation: any
        id: number
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
        const navigation = this.props.navigation;

        const id = navigation.getParam('id');
        const note = navigation.getParam('note');
        return (
            <PhotoDetail navigation={navigation} id={id} note={note}/>
        );
    }
}


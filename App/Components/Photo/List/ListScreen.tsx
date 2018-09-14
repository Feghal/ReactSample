import React from 'react'

import {
  StyleSheet,
} from 'react-native';
import PhotoList  from './PhotoList'
import Photo from "../../../models/Photo";

namespace ListScreen {
    export interface OwnProps {
        navigation: any
    }

    export interface DispatchProps {}

    export interface StateProps {}

    export interface State {
        navigation: any
    }

    export type Props = OwnProps & DispatchProps & StateProps;
}

export class ListScreen extends React.Component<ListScreen.Props, ListScreen.State> {
  static navigationOptions = {
    title: 'List',
  };
  render() {
      this.state = {
          navigation: this.props.navigation,
      };
      return (
        <PhotoList onPressRow={this.onPress.bind(this)}/>
    );
  }

  onPress(photo: Photo) {
      const { navigate } = this.state.navigation;
      navigate('Detail', { name: 'Detail', photo: photo })
  }
}


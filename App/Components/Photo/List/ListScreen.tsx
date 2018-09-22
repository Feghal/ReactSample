import React from 'react'
import {Component} from 'react';

import PhotoList  from './PhotoList'
import Photo from "../../../Models/Photo";

namespace ListScreen {
    export interface OwnProps {
        navigation: any
    }

    export interface DispatchProps {}

    export interface StateProps {}

    export interface State {}

    export type Props = OwnProps & DispatchProps & StateProps;
}

export class ListScreen extends Component<ListScreen.Props, ListScreen.State> {
  static navigationOptions = {
    title: 'List',
  };
  render() {
      return (
        <PhotoList onPressRow={(photo: Photo) => this.onPress(photo)}/>
    );
  }

  onPress(photo: Photo) {
      const { navigate } = this.props.navigation;
      navigate('Detail', { name: 'Detail', id: photo.id })
  }
}


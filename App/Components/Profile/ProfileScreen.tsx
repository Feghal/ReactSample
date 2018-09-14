import React from 'react'
import { Bananas } from './Bananas'

namespace ProfileScreen {
    export interface OwnProps {
        navigation: any
    }

    export interface DispatchProps {}

    export interface StateProps {}

    export interface State {}

    export type Props = OwnProps & DispatchProps & StateProps;
}


export class ProfileScreen extends React.Component<ProfileScreen.Props, ProfileScreen.State> {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Bananas/>
    );
  }
}

import React from 'react'
import {
  Button,
  View
} from 'react-native';

namespace HomeScreen {
    export interface OwnProps {
        navigation: any
    }

    export interface DispatchProps {}

    export interface StateProps {}

    export interface State {}

    export type Props = OwnProps & DispatchProps & StateProps;
}


export class HomeScreen extends React.Component<HomeScreen.Props, HomeScreen.State> {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1,
         flexDirection: 'column'
       }}>
          <Button
            title="Go to profile"
            onPress={() =>
            navigate('Profile', { name: 'Jane' })
            }
          />
          <Button
            title="Go to list"
            onPress={() =>
              navigate('List', { name: 'List' })
            }
          />
      </View>
    );
  }
}

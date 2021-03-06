import React from 'react';
import {Component} from 'react';

import {
  Button,
  View
} from 'react-native';
import {Keys} from "../../Constants/general";
import {fetchWith} from "../../Settings/Storage";


namespace HomeScreen {
    export interface OwnProps {
        navigation: any;
    }

    export interface DispatchProps {}

    export interface StateProps {}

    export interface State {}

    export type Props = OwnProps & DispatchProps & StateProps;
}


export class HomeScreen extends Component<HomeScreen.Props, HomeScreen.State> {
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
          <Button
              title="Go to Saved"
              onPress={() =>
                  this.navigateToDetail()
              }
          />
          <Button
              title="See Platform"
              onPress={() =>
                  navigate('Platform', { name: 'Platform' })
              }
          />
      </View>
    );
  }

  navigateToDetail() {
      const { navigate } = this.props.navigation;
      console.log(navigate);
      fetchWith(Keys.note, result => {
          if (result['id'] !== undefined) {
              navigate('Detail', {name: 'Detail', id: result['id'], note: result['note']})
          }
      });
  }

}

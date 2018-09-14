import React from 'react'
import {
  Image,
} from 'react-native';

export class Bananas extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={
      {
        flex: 1,
        alignItems: 'center'
      }
    }/>
    );
  }
}

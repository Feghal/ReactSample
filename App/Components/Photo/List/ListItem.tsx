import React from 'react'
import {Component} from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Photo from "../../../Models/Photo";
import {ListItemStyle} from "../../../Styles/style";

namespace ListItem {
    export interface OwnProps {
        item: Photo
    }

    export interface DispatchProps {}

    export interface StateProps {}

    export type Props = OwnProps & DispatchProps & StateProps;
}

export class ListItem extends Component<ListItem.Props> {
  render() {
    const item = this.props.item;
    let pic = {
      uri: item.url
    };
    return (
      <View style={{flex:1, flexDirection: 'row'}}>
        <Image source={pic} style={ListItemStyle.imageView} />
        <Text style={ListItemStyle.textView}>{item.title}</Text>
      </View>
    );
  }
}

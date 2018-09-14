import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import Photo from "../../../models/Photo";

namespace ListItem {
    export interface OwnProps {
        item: Photo
    }

    export interface DispatchProps {}

    export interface StateProps {}

    export interface State {}

    export type Props = OwnProps & DispatchProps & StateProps;
}

export class ListItem extends React.Component<ListItem.Props, ListItem.State> {
  render() {
    const item = this.props.item;
    let pic = {
      uri: item.url
    };
    return (
      <View style={{flex:1, flexDirection: 'row'}}>
        <Image source={pic} style={styles.imageView} />
        <Text style={styles.textView}>{item.title}</Text>
      </View>
    );
  }
}

 const styles = StyleSheet.create({
   imageView: {
       width: '50%',
       height: 100 ,
       margin: 7,
       borderRadius : 7
   },
   textView: {
    width:'50%',
    textAlignVertical:'center',
    padding:10,
    color: '#000'
  }
 });

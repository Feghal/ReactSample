import React from 'react'

import {
    Button,
    Image,
    Text,
    TextInput,
    View,
} from 'react-native';
import Photo from "../../../models/Photo";
import {DetailScreenStyle} from "../../../Styles/style";

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
        const { navigation } = this.props;
        const photo = navigation.getParam('photo');
        let pic = {
            uri: photo.url
        };
        return (
            <View style={DetailScreenStyle.container}>
                <Text style={DetailScreenStyle.textView}>{photo.title}</Text>
                <Image source={pic} style={DetailScreenStyle.imageView} />
                <TextInput style={DetailScreenStyle.textInput}
                           placeholder="Type here to the note!" />
                <Button
                    title="Save Note"
                    onPress={() =>
                        console.log(123)
                    }
                />
            </View>
        );
    }

}

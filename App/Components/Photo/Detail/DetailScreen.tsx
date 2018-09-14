import React from 'react'

import {
    Button,
    Image,
    Text,
    TextInput,
    View,
} from 'react-native';
import Photo from "../../../Models/Photo";
import {DetailScreenStyle} from "../../../Styles/style";
import {storeWith} from "../../../Settings/Storage";
import {Keys} from "../../../Constants/general";

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

    _textInput;

    render() {
        const { navigation } = this.props;
        const photo = navigation.getParam('photo');
        let pic = {
            uri: photo.url
        };
        let myRef = (component) => this._textInput = component;
        return (
            <View style={DetailScreenStyle.container}>
                <Text style={DetailScreenStyle.textView}>{photo.title}</Text>
                <Image source={pic} style={DetailScreenStyle.imageView} />
                <TextInput ref= {myRef}
                           style={DetailScreenStyle.textInput}
                           placeholder="Type here to the note!"/>
                <Button
                    title="Save Note"
                    onPress={() =>
                        this.savePhotoNote(photo)
                    }
                />
            </View>
        );
    }

    savePhotoNote(photo: Photo) {
        const text = this._textInput._lastNativeText;
        storeWith(Keys.note, {id: photo.id, note: text});
    }
}

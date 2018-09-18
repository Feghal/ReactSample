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
import {Keys, ProgressStatus} from "../../../Constants/general";
import {RootState} from "../../../Reducers";
import {Dispatch} from "redux";
import {getPhoto} from "../../../Actions/PhotoActions";
import {Loading} from "../../Shared/Loading";
import {connect} from "react-redux";
import {Error} from "../../Shared/Error"

namespace PhotoDetail {
    export interface OwnProps {
        navigation: any,
        id: number
        note?: string
    }

    export interface DispatchProps {
        getPhoto: (id: string) => void;
    }

    export interface StateProps {
        photoDetail?: Photo;
        detailStatus?: ProgressStatus;
        detailErrors?: string;
    }

    export interface State {
        isLoading: boolean;
    }

    export type Props = OwnProps & DispatchProps & StateProps;
}

class PhotoDetail extends React.Component<PhotoDetail.Props, PhotoDetail.State> {
    _textInput;

    componentDidMount() {
        this.props.getPhoto(this.props.id.toString());

        this.testPromise("test").then((data: string) => {
            console.log('passed');
        }).catch((error: any) => {
            console.log('cached');
        });
    }

    testPromise(id: string): Promise<string> {
        return new Promise<string>((resolve: (data: string) => void, reject) => {
            if (id === 'test') {
                resolve("Test");
            } else {
                reject("id is not test");
            }
        });
    }

    render() {
        switch (this.props.detailStatus) {
            case ProgressStatus.Failed:
                console.log(123);
                return(
                    <Error error={this.props.detailErrors}/>
                );
            case ProgressStatus.Success:
                const photoDetail = this.props.photoDetail;
                let pic = {
                    uri: photoDetail.url
                };
                const note = this.props.note;
                let myRef = (component) => this._textInput = component;
                return (
                    <View style={DetailScreenStyle.container}>
                        <Text style={DetailScreenStyle.textView}>{photoDetail.title}</Text>
                        <Image source={pic} style={DetailScreenStyle.imageView} />
                        <TextInput ref= {myRef}
                                   style={DetailScreenStyle.textInput}
                                   placeholder="Type here to the note!"
                                   defaultValue={note}/>
                        <Button
                            title="Save Note"
                            onPress={() =>
                                this.savePhotoNote(photoDetail)
                            }
                        />
                    </View>
                );
            default:
                return(
                    <Loading/>
                );
        }
    }

    savePhotoNote(photo: Photo) {
        const { goBack } = this.props.navigation;

        const text = this._textInput._lastNativeText;
        storeWith(Keys.note, {id: photo.id, note: text});
        goBack();
    }
}

function mapStateToProps(state: RootState): PhotoDetail.StateProps {
    return {
        photoDetail: state.photo.photoDetail,
        detailStatus: state.photo.detailStatus,
        detailErrors: state.photo.detailErrors,
    };
}

function mapDispatchToProps(dispatch: Dispatch): PhotoDetail.DispatchProps {
    return {
        getPhoto: (id: string) => dispatch(getPhoto(id))
    };
}

export default connect<PhotoDetail.StateProps, PhotoDetail.DispatchProps, PhotoDetail.OwnProps>(mapStateToProps, mapDispatchToProps)(PhotoDetail);
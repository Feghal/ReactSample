import React from 'react'
import {Component} from 'react';
import {
    FlatList,
    View,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { listPhotos } from '../../../Actions/PhotoActions';
import { ListItem } from './ListItem';
import Photo from "../../../Models/Photo";
import {ProgressStatus} from "../../../Constants/general";
import {RootState} from "../../../Reducers";
import {Dispatch} from "redux";
import {PhotoListStyle} from "../../../Styles/style"
import {Loading} from "../../Shared/Loading";
import {Error} from "../../Shared/Error";

namespace PhotoList {
  export interface OwnProps {
      onPressRow: (photo: Photo) => void;
  }

  export interface DispatchProps {
    listPhotos: () => void;
  }

  export interface StateProps {
      photoList?: Array<Photo>;
      listStatus?: ProgressStatus;
      listErrors?: string;
  }

  export interface State {
  }

  export type Props = OwnProps & DispatchProps & StateProps;
}

class PhotoList extends Component<PhotoList.Props, PhotoList.State> {

  constructor(props: PhotoList.Props){
    super(props);
  }

  componentWillReceiveProps(nextProps: PhotoList.Props) {
      console.log(nextProps.listPhotos);
  }

  componentWillMount(){
      this.props.listPhotos();
  }

  render(){
      switch (this.props.listStatus) {
          case ProgressStatus.Failed:
              return(
                  <Error error={this.props.listErrors}/>
              );
          case ProgressStatus.Success:
              const photoList  = this.props.photoList;
              let storedPhotos = photoList!.map(photo => ({ key: photo.id!.toString(), ...photo }));
              return(
                  <View style={PhotoListStyle.container}>
                      <FlatList
                          data={storedPhotos!}
                          renderItem={({item, index}) =>
                              <TouchableOpacity onPress={ () => this.props.onPressRow(item)}>
                                  <ListItem item={item}/>
                              </TouchableOpacity>
                          }
                          keyExtractor={(item) => item.key}
                      />
                  </View>
              );
          default:
              return(
                  <Loading/>
              );
      }
   }
 }



function mapStateToProps(state: RootState): PhotoList.StateProps {
    return {
        photoList: state.photo.photoList,
        listStatus: state.photo.listStatus,
        listErrors: state.photo.listErrors,
    };
}

function mapDispatchToProps(dispatch: Dispatch): PhotoList.DispatchProps {
    return {
      listPhotos: () => dispatch(listPhotos())
    };
}

export default connect<PhotoList.StateProps, PhotoList.DispatchProps, PhotoList.OwnProps>(mapStateToProps, mapDispatchToProps)(PhotoList);

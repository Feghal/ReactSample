import React from 'react'
import {
    FlatList,
    View,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { listPhotos } from '../../../Actions/PhotoListActions';
import { ListItem } from './ListItem';
import Photo from "../../../Models/Photo";
import {ProgressStatus} from "../../../Constants/general";
import {RootState} from "../../../Reducers";
import {Dispatch} from "redux";
import {PhotoListStyle} from "../../../Styles/style"

namespace PhotoList {
  export interface OwnProps {
      onPressRow: (photo: Photo) => void;
  }

  export interface DispatchProps {
    listPhotos: () => void;
  }

  export interface StateProps {
      photos?: Array<Photo>;
      status?: ProgressStatus;
  }

  export interface State {
    isLoading: boolean;
  }

  export type Props = OwnProps & DispatchProps & StateProps;
}

class PhotoList extends React.Component<PhotoList.Props, PhotoList.State> {

  constructor(props: PhotoList.Props){
    super(props);
  }

  componentWillMount(){
      this.props.listPhotos();
  }

  render(){
    const photos  = this.props.photos;
    const status = this.props.status;

    if(status !== ProgressStatus.Success){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }
      let storedPhotos = photos!.map(photo => ({ key: photo.id!.toString(), ...photo }));
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
   }
 }



function mapStateToProps(state: RootState): PhotoList.StateProps {
    return {
        photos: state.list.photos,
        status: state.list.status,
    };
}

function mapDispatchToProps(dispatch: Dispatch): PhotoList.DispatchProps {
    return {
      listPhotos: () => dispatch(listPhotos())
    };
}

export default connect<PhotoList.StateProps, PhotoList.DispatchProps, PhotoList.OwnProps>(mapStateToProps, mapDispatchToProps)(PhotoList);

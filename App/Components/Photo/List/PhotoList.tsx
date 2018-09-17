import React from 'react'
import {
    FlatList,
    View,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
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
  }

  export interface State {
  }

  export type Props = OwnProps & DispatchProps & StateProps;
}

class PhotoList extends React.Component<PhotoList.Props, PhotoList.State> {

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
    const photoList  = this.props.photoList;
    const listStatus = this.props.listStatus;

    if(listStatus !== ProgressStatus.Success){
      return(
          <Loading/>
      );
    }
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
   }
 }



function mapStateToProps(state: RootState): PhotoList.StateProps {
    return {
        photoList: state.photo.photoList,
        listStatus: state.photo.listStatus,
    };
}

function mapDispatchToProps(dispatch: Dispatch): PhotoList.DispatchProps {
    return {
      listPhotos: () => dispatch(listPhotos())
    };
}

export default connect<PhotoList.StateProps, PhotoList.DispatchProps, PhotoList.OwnProps>(mapStateToProps, mapDispatchToProps)(PhotoList);

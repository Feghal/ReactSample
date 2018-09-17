import {handleActions} from 'redux-actions';
import {App} from '../Constants/actions'
import Photo from "../Models/Photo";
import {ProgressStatus} from "../Constants/general";

export interface PhotoStoreState {
    photoList?: Array<Photo>;
    listErrors?: string;
    listStatus?: ProgressStatus;

    photoDetail?: Photo;
    DetailErrors?: string;
    detailStatus?: ProgressStatus;
}

export const initialState: PhotoStoreState = {
    listStatus: ProgressStatus.None,
    detailStatus: ProgressStatus.None,
};


export default handleActions<PhotoStoreState, any>({
    [App.Photo.List.Request]: (state, action) => {
        return {
            listStatus: ProgressStatus.Loading
        };
    },

    [App.Photo.List.Success]: (state: PhotoStoreState, action: any) => {
        return {
            listStatus: ProgressStatus.Success,
            photoList: action.payload.data
        };
    },

    [App.Photo.List.Fail]: (state: PhotoStoreState, action: any) => {
        console.log("reducer:", action.error.response.data.reason);
        return {
            listStatus: ProgressStatus.Failed,
            listErrors: action.error.response.data.reason,
        };
    },
    [App.Photo.Detail.Request]: (state, action) => {
        return {
            listStatus: state.listStatus,
            photoList: state.photoList,
            detailStatus: ProgressStatus.Loading
        };
    },

    [App.Photo.Detail.Success]: (state: PhotoStoreState, action: any) => {
        return {
            listStatus: state.listStatus,
            photoList: state.photoList,
            detailStatus: ProgressStatus.Success,
            photoDetail: action.payload.data
        };
    },

    [App.Photo.Detail.Fail]: (state: PhotoStoreState, action: any) => {
        console.log("reducer:", action.error.response.data.reason);
        return {
            detailStatus: ProgressStatus.Failed,
            DetailErrors: action.error.response.data.reason,
        };
    },

}, initialState);


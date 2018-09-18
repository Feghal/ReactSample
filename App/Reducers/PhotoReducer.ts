import {handleActions} from 'redux-actions';
import {App} from '../Constants/actions'
import Photo from "../Models/Photo";
import {ProgressStatus} from "../Constants/general";

export interface PhotoStoreState {
    photoList?: Array<Photo>;
    listErrors?: string;
    listStatus?: ProgressStatus;

    photoDetail?: Photo;
    detailErrors?: string;
    detailStatus?: ProgressStatus;
}

export const initialState: PhotoStoreState = {
    listStatus: ProgressStatus.None,
    detailStatus: ProgressStatus.None,
};


export default handleActions<PhotoStoreState, any>({
    [App.Photo.List.Request]: (state, action) => {
        return Object.assign({}, state, {
            listStatus: ProgressStatus.Loading
        });
    },

    [App.Photo.List.Success]: (state: PhotoStoreState, action: any) => {
        return Object.assign({}, state, {
            listStatus: ProgressStatus.Success,
            photoList: action.payload.data
        });
    },

    [App.Photo.List.Fail]: (state: PhotoStoreState, action: any) => {
        return Object.assign({}, state, {
            listErrors: action.error.data,
        });
    },

    [App.Photo.Detail.Request]: (state, action) => {
        return Object.assign({}, state, {
            detailStatus: ProgressStatus.Loading
        });
    },

    [App.Photo.Detail.Success]: (state: PhotoStoreState, action: any) => {
        return Object.assign({}, state, {
            detailStatus: ProgressStatus.Success,
            photoDetail: action.payload.data
        });
    },

    [App.Photo.Detail.Fail]: (state: PhotoStoreState, action: any) => {
        return Object.assign({}, state, {
            detailStatus: ProgressStatus.Failed,
            detailErrors: action.error.data,
        });
    },
}, initialState);


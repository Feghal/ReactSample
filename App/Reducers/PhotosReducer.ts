import {handleActions} from 'redux-actions';
import {App} from '../Constants/actions'
import Photo from "../Models/Photo";
import {ProgressStatus} from "../Constants/general";

export interface ListStoreState {
    photos?: Array<Photo>;
    errors?: string;
    status: ProgressStatus;
}

export const initialState: ListStoreState = {
    status: ProgressStatus.None,
};


export default handleActions<ListStoreState, any>({
    [App.Photo.List.Request]: (state, action) => {
        return {
            status: ProgressStatus.Loading
        };
    },

    [App.Photo.List.Success]: (state: any, action: any) => {
        return {
            status: ProgressStatus.Success,
            photos: action.payload.data
        };
    },

    [App.Photo.List.Fail]: (state: any, action: any) => {
        console.log("reducer:", action.error.response.data.reason);
        return {
            status: ProgressStatus.Failed,
            errors: action.error.response.data.reason,
        };
    },
}, initialState);

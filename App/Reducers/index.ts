import { combineReducers } from "redux";
import photo, { PhotoStoreState, initialState } from './PhotoReducer';

export interface RootState {
    photo: PhotoStoreState;
}

export const PhotoInitialState = initialState;

export default combineReducers<RootState>({
    photo,
});
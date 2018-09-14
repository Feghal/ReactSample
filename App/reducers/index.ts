import { combineReducers } from "redux";
import list, { ListStoreState, initialState } from './PhotosReducer';

export interface RootState {
    list: ListStoreState;
}

export const ListInitialState = initialState;

export default combineReducers<RootState>({
    list,
});
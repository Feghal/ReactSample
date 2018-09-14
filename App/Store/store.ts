import {applyMiddleware, createStore, Store} from 'redux';
import {asyncDispatch, axios, logger} from '../Middleware';
import rootReducer, {RootState} from '../Reducers';

export function configureStore(initialState: RootState) {
    let middleware = applyMiddleware(axios, asyncDispatch, logger);

    return createStore(rootReducer, initialState, middleware) as Store<RootState>;
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {ListInitialState, RootState} from "./Reducers";
import {configureStore} from "./Store/store";
import {Provider} from 'react-redux';
import {AppNavigation} from "./Routers/MainRouter";

const persistedState: RootState = {
    list: ListInitialState,
};

const store = configureStore(persistedState);

class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <AppNavigation/>
            </Provider>
        );
    }
}

export default App;

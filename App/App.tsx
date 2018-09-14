/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {ListInitialState, RootState} from "./reducers";
import {configureStore} from "./store/store";
import {Provider} from 'react-redux';
import {AppNavigation} from "./routers/MainRouter";

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

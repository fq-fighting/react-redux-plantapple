import React from'react';
import {render} from "react-dom";
import {Router,Route,hashHistory } from "react-router";
import {createStore,applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunkMiddleware  from 'redux-thunk';

import rootReducer from "../reducers";
import AppleCase from "../containers/appleCase";

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

render(
    <Provider store={store}>
        <AppleCase />
    </Provider>,
    document.getElementById('content')
);

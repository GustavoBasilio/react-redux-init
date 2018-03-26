import React from "react";
import css from "../assets/sass/app.scss";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import Reducers from "./reducers";
import Page from "./components/Page";
import {exempleAction} from "./actions";

// Creating the store the redux will use
const store = createStore(Reducers);
store.dispatch(exempleAction('ChangeExemple'));

// Rendering the compoment and attaching it to store created
render(
    <Provider store={store}>
        <Page />
    </Provider>,
    document.getElementById('app')
);
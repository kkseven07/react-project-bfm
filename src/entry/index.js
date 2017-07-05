import React, { Component } from "react";
import { render } from "react-dom";
import "../app/app.css";

import configureStore from "./store";
import createHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";

import { ConnectedRouter } from "react-router-redux";

import App from "../app/app";

const store = configureStore();
const history = createHistory();
import ReactGA from "react-ga";
ReactGA.initialize("UA-101909111-1");

history.listen((location, action) => {
    // console.log(location, action)
    const page=location.pathname
    ReactGA.set({page})
    ReactGA.pageview(page);
});

// import { AppRegistry } from 'react-native-web';
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

// const rootTag = document.getElementById('root');
// AppRegistry.registerComponent('App', () => App);
// AppRegistry.runApplication('App', { rootTag });

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store"
import { BrowserRouter } from "react-router";


const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);



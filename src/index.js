import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "./app/store/createStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
// import history from "./app/utils/history";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import "assets/css/index.css";
import "assets/sass/app.sass";
import App from "./AppRoute";
import * as serviceWorker from "./serviceWorker";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "@mdi/font/css/materialdesignicons.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

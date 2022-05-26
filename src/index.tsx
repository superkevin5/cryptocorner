import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from './components/App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/app.scss'
ReactDOM.render(
    <App message={'1'}/>,
    document.getElementById("example")
);
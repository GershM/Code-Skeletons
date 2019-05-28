import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Redirect, Route, Link  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { createBrowserHistory } from "history";

import App from './App'
import Error404 from './404'
const history = createBrowserHistory()

const Routes =() =>
        <BrowserRouter history={history} >
            <nav >
                <Link to='/'>Home</Link>
                <Link to='/about'>about</Link>
            </nav>
            <Switch>
                <Route exact={true} path="/" component={App}/>
                <Route path="/about" component={Notfound2}/>
                <Route component={Error404} />
            </Switch>
        </BrowserRouter>

const Notfound2 = () => <h1>test</h1>

axios.defaults.baseURL = '/api';
axios.defaults.headers = {
    'Content-Type': 'application/json'
};

ReactDOM.render(<Routes />, document.getElementById("root"));


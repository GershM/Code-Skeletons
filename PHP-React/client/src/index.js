import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter, Switch, Redirect, Route, Link  } from "react-router-dom";
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

import { createBrowserHistory } from "history";

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
                <Route component={Notfound} />
            </Switch>
        </BrowserRouter>

const Notfound = () => <h1>Not found</h1>
const Notfound2 = () => <h1>test</h1>



ReactDOM.render(<Routes />, document.getElementById("root"));


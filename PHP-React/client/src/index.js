import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

function buildRoutes() {
    return (
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
        <Route path="/users" exact component={App} />
      </div>
    </Router>
    )
}
ReactDOM.render(buildRoutes(), document.getElementById("root"));


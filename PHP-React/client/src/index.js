import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

// function buildRoutes() {
//     return (
//         <Router history={browserHistory}>
//             <Route path="/login" component={App}/>
//         </Router>

//     )
// }
ReactDOM.render(App(), document.getElementById("root"));


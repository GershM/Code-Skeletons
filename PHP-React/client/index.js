import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App'


// function buildRoutes() {
//     return (
//         <Router history={browserHistory}>
//             <Route path="/login" component={App}/>
//         </Router>

//     )
// }

ReactDOM.render(App(), document.getElementById("root"));


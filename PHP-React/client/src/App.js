import React from 'react';
import { Button } from 'react-bootstrap';
import axios from "axios";

export default class App extends React.Component {
  render() {
    axios.get("hello/test").then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
      return (
      <div className="App">
         <h1>App</h1>
      </div>
    );
  }
}
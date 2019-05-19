import React from 'react';

function App() {
  var test="";
  fetch("http://localhost:8081/hello/lev")
  .then(
    (result) => {
      test = result;
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
      console.log(error);
    }
  );

  return (
    <div className="App">
        {test}
    </div>
  );
}

export default App;

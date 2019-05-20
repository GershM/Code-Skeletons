import React from 'react';

function App() {
  var test="";
  fetch("localhost/hello/lev")
  .then(
    (result) => {
      test = result;
    },
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

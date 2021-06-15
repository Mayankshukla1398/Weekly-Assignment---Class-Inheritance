import React from "react";
var Shape = require('./shape');
var Circle = require('./circle');

class App extends Circle{
  return (
    <div className="App">
     <Shape/>
     <Circle/>
    </div>
  );
}

module.exports.App = App;

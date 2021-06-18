const React = require("react");
const Styles =require('../styles/App.css');
const Shape =require("./shape");
const Circle =require("./circle");

class App extends React.Component {
    render() {

        return(
            <div>
              
            <Shape/>
            <Circle/>
            </div>
        )
    }
}


module.exports = App;

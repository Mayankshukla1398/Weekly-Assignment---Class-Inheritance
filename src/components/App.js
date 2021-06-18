import React, { Component } from 'react';
import Shape from './shape';
import Circle from './circle';
import '../styles/App.css'



class App extends React.Component {
    render() {

        return(
            <div>
            <Circle/>
            <Shape/>
            </div>
        )
    }
}


export default App;

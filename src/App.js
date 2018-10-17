import React, { Component } from 'react';
import Header from './components/Header';
import People from './components/People';

import './App.css';

class App extends Component {
  state = {
    name: 'Leandro',
    lastName: 'Carolino'
  }
  
  render() {
    return (
      <div className="App">
        <Header title="Awesome People"/>
        <h1>{this.state.name}</h1>
        <People />
      </div>
    );
  }
}

export default App;

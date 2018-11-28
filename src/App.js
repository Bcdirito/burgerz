import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {
  state = {
    savedBurger: {}
  }

  saveBurger = (burger) => {
    this.setState({ savedBurger: burger})
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer saveBurger={this.saveBurger}/>
        <BurgerDisplay burger={this.state.savedBurger}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {
  state = {
    burgerArray: [],
    filteredArray: [],
    filter: ""
  }

  componentDidMount(){
    fetch("http://localhost:3001/burgers")
    .then(res => res.json())
    .then(data => this.setState({burgerArray: data, filteredArray: data}))
  }

  changeFilter = (event) => {
    console.log(event.target.value)
    if (event.target.value !== "All"){
      this.setState({
        filteredArray: [...this.state.burgerArray].filter(burger => {
          return burger.category !== event.target.value
        })
      })
    } else {
      this.setState({ filteredArray: this.state.burgerArray})
    }

    
    
    // if (event.target.value !== "All"){
    //   copyArr
    // } else {
    //   this.setState({ filteredArray: this.state.burgerArray})
    // }
  }

  hideBurger = (burgerObj) => {
    this.setState({
      filteredArray: [...this.state.burgerArray].filter(burger => {
        return burger !== burgerObj
      })
    })
  }

  storeBurger = (burger) => {
    this.props.saveBurger(burger)
  }

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter changeFilter={this.changeFilter} />
        <BurgerList storeBurger={this.storeBurger}
                    burgers={this.state.filteredArray}
                    hideTheBurger={this.hideBurger}
        />
      </div>
    )
  }
}

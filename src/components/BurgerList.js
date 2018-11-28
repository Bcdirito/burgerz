import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

class BurgerList extends Component {

  // state = {
  //   burgerArray: [],
  //   filteredArray: []
  // }

  collectBurger = (burger) => {
    this.props.storeBurger(burger)
  }

  collectBurgerToHide = (burger) => {
    this.props.hideTheBurger(burger)
  }
  
  render(){
    // debugger
    const filteredArr = this.props.burgers.map(burger => {
        return <BurgerItem 
              key={burger.id}
              burger={burger}
              collectBurger={this.collectBurger}
              hideBurger={this.collectBurgerToHide}
              />

      }) 
    return (
      <div className="BurgerList">
        {filteredArr}
      </div>
    )
  }

}

export default BurgerList

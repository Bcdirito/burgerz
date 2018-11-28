import React, { Component } from 'react';

class BurgerDisplay extends Component {
  
  state = {
    category: ""
  }

  editBurger = (event, burger) => {
    const newCat = event.target.lastElementChild.innerText
    const url = "http://localhost:3001/burgers" + "/" + burger.id
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        category: newCat
      })
    })
    .then(res => res.json())
    .then(data => this.setState({category: data.category}, () => console.log(this.state.category)))
  }

  // stateChange = (newCat) => {
    
  // }

  render() {
    // console.log(this.props.burger.name)

    return (
      <div className="BurgerDisplay">
        <img src={this.props.burger.imgURL} alt={this.props.burger.name}/>
        <br/>
        <h1>{this.props.burger.name}</h1>
        <br/>
        <select onChange={e => this.editBurger(e, this.props.burger)}>
          <option value={this.props.burger.category}>{this.props.burger.category}</option>
          <option value="Other">{this.props.burger.category === "Relatable" ? "Bougie" : "Relatable"}</option>
        </select>
      </div>
    )

  }
}

export default BurgerDisplay

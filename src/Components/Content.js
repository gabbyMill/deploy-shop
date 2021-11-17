import GroceryList from "./GroceryList";
import BasketList from "./BasketList";
import React, { Component } from "react";
class Content extends Component {
  constructor() {
    super();
    this.state = { basket: [] };
    /* groceries: [] later add to state */
  }
  componentDidUpdate() {
    console.log(this.state);
  }

  updateBasket = item => {
    let quant;

    // If this item is already on basket list
    const basketCopy = [...this.state.basket];
    this.state.basket.forEach((obj, i) => {
      if (obj.item === item) {
        quant = obj.quant + 1;
        const itemObject = { item, quant };
        basketCopy.splice(i, 1, itemObject);
        this.setState({ basket: basketCopy });
      }
    });
    // If this is a new item
    if (quant != undefined) return;
    const updated = [...this.state.basket, { item, quant: 1 }];
    this.setState({ basket: updated });

    // Later, add functionality to decrement and increment quantity
    // You can do this by modifying basket to be an array of objects
  };

  // increase = item => {
  //   this.state.basket.forEach(stateItem => {
  //     if (stateItem === item) {
  //       this.setState();
  //     }
  //   });
  // };
  // decrease = item => {
  //   this.state.basket.forEach(stateItem => {
  //     if (stateItem === item) {
  //       this.setState();
  //     }
  //   });
  // };

  render() {
    return (
      <div className="content">
        <GroceryList addToBasket={this.updateBasket} />
        <BasketList
          list={this.state.basket}
          inc={this.increase}
          dec={this.decrease}
        />
      </div>
    );
  }
}

export default Content;

// Another way of setting state
// this.setState(prevState => {
//   const updated = prevState.basket.concat(item);
//   return { basket: updated };
// });

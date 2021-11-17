import GroceryList from "./GroceryList";
import BasketList from "./BasketList";
import Searchbar from "./Search-bar";
import React, { Component } from "react";
class Content extends Component {
  constructor() {
    super();
    this.state = { basket: [] };
    /* groceries: [] later add to state */
  }

  updateBasket = item => {
    let quant;
    // Code dup, use handleAddState

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
    if (quant != undefined) return;
    const updated = [...this.state.basket, { item, quant: 1 }];
    this.setState({ basket: updated });
  };

  increase = item => {
    // Code dup, use handleAddState
    const basketCopy = [...this.state.basket];
    this.state.basket.forEach((obj, i) => {
      if (obj.item === item) {
        const quant = obj.quant + 1;
        const itemObject = { item, quant };
        basketCopy.splice(i, 1, itemObject);
        this.setState({ basket: basketCopy });
      }
    });
  };
  decrease = item => {
    // Code dup, use handleAddState
    const basketCopy = [...this.state.basket];
    this.state.basket.forEach((obj, i) => {
      if (obj.item === item) {
        const quant = obj.quant - 1;
        if (quant === 0) return;
        const itemObject = { item, quant };
        basketCopy.splice(i, 1, itemObject);
        this.setState({ basket: basketCopy });
      }
    });
  };

  wordsToFilter = e => {
    const val = e.target.value;
    const liItems = [...document.querySelectorAll(".li-item")];
    liItems.forEach(el => {
      if (!el.textContent.toLowerCase().includes(val.toLowerCase())) {
        el.classList.add("hidden");
      } else {
        if ([...el.classList].includes("hidden")) el.classList.remove("hidden");
      }
    });
  };

  render() {
    return (
      <>
        <Searchbar wordsToFilter={this.wordsToFilter} />
        <div className="content">
          <GroceryList addToBasket={this.updateBasket} />
          <BasketList
            list={this.state.basket}
            increase={this.increase}
            decrease={this.decrease}
          />
        </div>
      </>
    );
  }
}

function handleAddState() {
  return true;
}

export default Content;

// Another way of setting state
// this.setState(prevState => {
//   const updated = prevState.basket.concat(item);
//   return { basket: updated };
// });

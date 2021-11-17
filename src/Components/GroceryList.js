import React, { Component } from "react";
import GroItem from "./GorceryItem";
class GroceryList extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        "Cucumbers",
        "Tomatoes",
        "Bread",
        "Beets",
        "Hummus",
        "Lentils",
        "Rice",
      ],
    };
  }

  render() {
    return (
      <div className="gro-list">
        <h4>Groceries</h4>
        <ul>
          {this.state.items.map((item, i) => (
            <GroItem
              name={item}
              key={i}
              add={() => this.props.addToBasket(item)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default GroceryList;

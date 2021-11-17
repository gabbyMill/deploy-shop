import React, { Component } from "react";
import GroItem from "./Gro-li";
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
        <h4>Gro List</h4>
        <ul>
          {this.state.items.map(item => {
            return <GroItem name={item} />;
          })}
        </ul>
      </div>
    );
  }
}

export default GroceryList;

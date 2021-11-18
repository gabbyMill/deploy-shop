import React, { Component } from "react";
import BasItem from "./BasketItem";
class BasketList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="bas-list">
        <h2>🛒</h2>
        <ul className="bas-ul">
          {this.props.list.map((obj, i) => (
            <BasItem
              key={i}
              name={obj.item}
              quant={obj.quant}
              increase={() => this.props.increase(obj.item)}
              decrease={() => this.props.decrease(obj.item)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default BasketList;

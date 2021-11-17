import React, { Component } from "react";
import BasItem from "./Bas-li";
class BasketList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="bas-list">
        <h6>Bas List</h6>
        <ul className="bas-ul">
          {this.props.list.map((obj, i) => (
            <BasItem
              key={i}
              name={obj.item}
              quant={obj.quant}
              increase={this.props.increase}
              decrease={this.props.decrease}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default BasketList;

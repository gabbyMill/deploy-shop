import React, { Component } from "react";
class BasItem extends Component {
  lineTh(e) {
    const basketItem = e.target.closest(".li-item");
    basketItem.classList.toggle("line-th");
  }

  render() {
    return (
      <div className="bas-item">
        <button onClick={this.props.increase}>+</button>
        <button onClick={this.props.decrease}>-</button>
        <li className="li-item">
          <input type="checkbox" onClick={this.lineTh} />
          {this.props.quant} {this.props.name}
        </li>
      </div>
    );
  }
}

export default BasItem;

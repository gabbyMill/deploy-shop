import React, { Component } from "react";
class BasItem extends Component {
  render() {
    return (
      <div className="bas-item">
        <button onClick={this.props.increase}>+</button>
        <button onClick={this.props.decrease}>-</button>
        <li>
          {this.props.quant} {this.props.name}
        </li>
        <input type="checkbox" onClick={() => console.log(123)} />
      </div>
    );
  }
}

export default BasItem;

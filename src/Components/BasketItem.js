import React, { Component } from "react";
class BasItem extends Component {
  lineTh(e) {
    const basketItem = e.target.closest(".li-item");
    basketItem.classList.toggle("line-th");
  }

  render() {
    return (
      <div className="bas-item">
        <li className="li-item">
          <input type="checkbox" onClick={this.lineTh} />
          {this.props.quant} {this.props.name}
          <div className="inc-dec">
            <button className="inc" onClick={this.props.increase}>
              +
            </button>
            <button className="dec" onClick={this.props.decrease}>
              -
            </button>
          </div>
        </li>
      </div>
    );
  }
}

export default BasItem;

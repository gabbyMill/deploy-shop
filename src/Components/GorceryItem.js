import React, { Component } from "react";
class GroItem extends Component {
  render() {
    return (
      <div className="gro-item">
        <button onClick={this.props.add}>Add to basket</button>
        <li>{this.props.name}</li>
      </div>
    );
  }
}

export default GroItem;

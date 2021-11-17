import React, { Component } from "react";
class GroItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="gro-item">
        <button>Add to basket</button>
        <li>{this.props.name}</li>
      </div>
    );
  }
}

export default GroItem;

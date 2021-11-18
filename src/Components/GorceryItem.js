import React, { Component } from "react";
class GroItem extends Component {
  render() {
    return (
      <div className="gro-item">
        <button className="add-to" onClick={this.props.add}>
          ➕
        </button>
        <li>{this.props.name}</li>
      </div>
    );
  }
}

export default GroItem;

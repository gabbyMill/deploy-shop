import React, { Component } from "react";
class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sBar: "",
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onInput={this.props.wordsToFilter}
          className="event-search"
          placeholder="Search for item"
        />
      </div>
    );
  }
}

export default Searchbar;

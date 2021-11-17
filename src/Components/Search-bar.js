import React, { Component } from "react";
class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sBar: "",
    };
  }

  // filter = event => {
  //   this.setState({ sBar: event.target.value });
  // };

  // componentDidUpdate() {
  //   const sBarValue = this.state.sBar;
  // }

  render() {
    return (
      <div className="search-bar">
        <h6>SearchBar</h6>
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

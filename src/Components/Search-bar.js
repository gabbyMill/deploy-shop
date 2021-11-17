import react, { Component } from "react";
class Searchbar extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div className="search-bar">
        <h6>SearchBar</h6>
        <input className="text-search" placeholder="Search for item" />
      </div>
    );
  }
}

export default Searchbar;

import react, { Component } from "react";
class Header extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div className="basket">
        <div className="cart">🛒</div>
        <div className="cart-text">Basket Case</div>
      </div>
    );
  }
  updateFilter = () => {};
}

export default Header;

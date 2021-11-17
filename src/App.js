import Header from "./Components/Header";
import Searchbar from "./Components/Search-bar";
import GroceryList from "./Components/Groceries-ul";
import BasketList from "./Components/Basket-ul";
import Footer from "./Components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <div className="container">
        <GroceryList />
        <BasketList />
      </div>
      <Footer />
    </div>
  );
}

export default App;

// import logo from "./logo.svg";

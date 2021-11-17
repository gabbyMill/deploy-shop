import Header from "./Components/Header";
import Searchbar from "./Components/Search-bar";
import GrocerieList from "./Components/Groceries-ul";
import BasketList from "./Components/Basket-ul";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          reiciendis eius <strong>explicabo</strong> quaerat sit nesciunt,
          officiis excepturi vero incidunt voluptatem?
        </p>
      </div>
      <Header />
      <Searchbar />
      <GrocerieList />
      <BasketList />
    </div>
  );
}

export default App;

// import logo from "./logo.svg";

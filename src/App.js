import Header from "./Components/Header";
import Searchbar from "./Components/Search-bar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <div id="container">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;

// import logo from "./logo.svg";

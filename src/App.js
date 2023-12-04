import "./App.css";
import React from "react";
import Header from "./containers/Header/Header";
import About from "./containers/About/About";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;

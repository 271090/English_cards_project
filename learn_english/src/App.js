import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Vocabulare from "./components/Vocabulare/Vocabulare";
import "./components/Header/Header.css";
import "./components/Footer/Footer.css";
import "./components/Vocabulare/Vocabulare.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Vocabulare/>
      <Footer/>
    </div>
  );
}

export default App;
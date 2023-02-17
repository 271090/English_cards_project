import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./components/Header/Header.css";
import "./components/Footer/Footer.css";
import "./components/Vocabulare/Vocabulare.css";
import Game from "./components/Game/Game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Game/>
      <Footer/>
    </div>
  );
}

export default App;
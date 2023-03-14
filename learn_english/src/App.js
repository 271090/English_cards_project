import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutProject from "./components/LayoutProject/LayoutProject";
import Game from "./components/Game/Game";
import Vocabulare from "./components/Vocabulare/Vocabulare";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import "./components/Vocabulare/Vocabulare.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<LayoutProject />}>
          <Route exact path="/" element={<Vocabulare />} />
          <Route exact path="/game" element={<Game />} />
          <Route exact path="/vocabulary" element={<Vocabulare />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
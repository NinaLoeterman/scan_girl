import React from "react";
import "./App.css";
import Player from "./Components/Player.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/suicide" component={Player} />
      </Router>
    </div>
  );
}

const Player = () => (
  <Player
    video={"https://www.youtube.com/watch?v=A-yMz35wIxU&feature=youtu.be"}
  />
);

export default App;

import React from "react";
import "./App.css";
import Player from "./Components/Player.jsx";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/suicide"></Link>
          <Link to="/coming-back"></Link>
          <Switch>
            <Route path="/suicide" component={Play} />
            <Route path="/coming-back" component={Play}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const Play = () => (
  <Player
    video={"https://www.youtube.com/watch?v=A-yMz35wIxU&feature=youtu.be"}
  />
);

export default App;

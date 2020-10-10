import React from "react";
import "./App.css";
import Player from "./Components/Player.jsx";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/suicide">suicide</Link>
          <Link to="/coming-back">coming-back</Link>
          <Switch>
            <Route path="/suicide" component={Play('https://youtu.be/A-yMz35wIxU')} />
            <Route path="/coming-back" component={Play('https://youtu.be/EdKkofuIOR0')} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const Play = (url) => (
  <Player
    video={url}
  />
);

export default App;

import React from "react";
import "./App.css";
import Player from "./Components/Player.jsx";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/suicide">suicide</Link>
            </li>
            <li>
              <Link to="/coming-back">coming back</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/suicide" component={Play} />
          <Route path="/coming-back" component={Play}>
          </Route>
          <Route path="/">
            <div> landing page </div>            
          </Route>
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

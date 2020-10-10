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
            <Route path="/suicide">
              <Player video={"https://youtu.be/A-yMz35wIxU"} />
            </Route>
            <Route path="/coming-back">
              <Player video={"https://youtu.be/EdKkofuIOR0"} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

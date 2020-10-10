import React from "react";
import "./App.css";
import Player from "./Components/Player.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/:slug" component={Player}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

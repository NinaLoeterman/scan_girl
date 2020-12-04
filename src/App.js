import React from "react";
import "./App.css";
import Player from "./Components/Player/Player.jsx";
import HomePage from './Components/HomePage/HomePage.jsx'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" component={HomePage}/>
            <Route path="/video/:slug" component={Player}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

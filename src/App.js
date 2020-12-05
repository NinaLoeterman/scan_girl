import React from "react";
import "./App.css";
import Player from "./Components/Player/Player.jsx";
import HomePage from './Components/HomePage/HomePage.jsx'
import { BrowserRouter as BrowserRouter, Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/video/:slug" component={Player}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

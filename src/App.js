import React from 'react';
import './App.css';
import Player from "./Components/Player.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/suicide">
            <Player video={"https://www.youtube.com/watch?v=A-yMz35wIxU&feature=youtu.be"} />
          </Route>
          {/* <Route path="/coming-back">
            <Player video={comingBack} />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

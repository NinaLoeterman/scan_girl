import React from "react";
import "./App.css";
import Player from "./Components/Player.jsx";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Player
        video={"https://www.youtube.com/watch?v=A-yMz35wIxU&feature=youtu.be"}
      />

      {/* <Router>
        <Switch>
          <Route path="/suicide">
            <Player video={"https://www.youtube.com/watch?v=A-yMz35wIxU&feature=youtu.be"} />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;

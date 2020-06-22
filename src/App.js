import React from 'react';
import Navbar from './components/Navbar.js'
// import Home from './Pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import "./style.css"

// https://www.youtube.com/watch?v=FZQxPTV3cFk

function App() {
  return (
    <div>
      <h1> halo </h1>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/"><Home /></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
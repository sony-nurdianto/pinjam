import React from 'react';
import Navbar from './components/Navbar.js'
// import Home from './Pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import "./style.css"

// https://www.youtube.com/watch?v=FZQxPTV3cFk

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route exact path="/"><Home /></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
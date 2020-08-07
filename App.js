import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import Home from "./Home"
import About from "./About"
import Resources from "./Resources"
import Footer from "./Footer";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


const App = () => {
    return (
      <div>
        <Router>
          <div>
            <Navigation>
            </Navigation>
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route path = "/About" component = {About} />
              <Route path = "/Resources" component = {Resources} />
            </Switch>
            <Footer>
            </Footer>
          </div>
        </Router>
      </div>
    )
}

export default App;

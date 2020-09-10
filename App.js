import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import Home from "./Home"
import About from "./About"
import Footer from "./Footer"
import Resources from "./Resources"
import ScrollToTop from "./ScrollToTop";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const App = () => {
    return (
      <div>
        <Router>
          <ScrollToTop />
          <div>
            <Navigation />
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route path = "/About" component = {About} />
              <Route path = "/Resources" component = {Resources} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    )
}

export default App;

import React, { Component } from 'react';
 
import HomePage from "./screens/home/home";
import Header from "./screens/header/header";
import Login from "./screens/login/login";

import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
class App extends Component{
  render(){
    return(
      <Router>
      <div>
           <Header />

           <Switch>
    
              <Route path = "/" component = {HomePage} exact  />
              <Route path = "/login" component = {Login} exact  />

            </Switch>
      </div>
      </Router>
      )
  }
}

export default App;

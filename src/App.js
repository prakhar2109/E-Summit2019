import React, { Component } from 'react';
 
import HomePage from "./screens/home/home";
import Header from "./screens/header/header";
import Login from "./screens/login/login";

import LeaderBoard from "./screens/caLeaderboard/js/caLeaderboard"

import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
class App extends Component{
  render(){
    return(
      <Router>
      <div>
          

           <Switch>
    
              <Route path = "/" component = {HomePage} exact  />
              <Route path = "/login" component = {Login} exact  />
              <Route path = "/login/leaderboard" component = {LeaderBoard} exact  />

            </Switch>
      </div>
      </Router>
      )
  }
}

export default App;

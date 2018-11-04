import React, { Component } from 'react';
import HomePage from "./screens/home/home";
import Header from "./screens/header/header";
import Login from "./screens/login/login";
import Register from "./screens/register/register";

import LeaderBoard from "./screens/caLeaderboard/js/caLeaderboard"
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import CaLeaderboard from './screens/caLeaderboard/js/caLeaderboard';
class App extends Component{
  render(){
    return(
      <Router>
      <div>
          
            <Header/>

           <Switch>
    
              <Route path = "/" component = {HomePage} exact  />
              <Route path = "/login" component = {Login} exact  />
              <Route path = "/register" component = {Register} exact  />
              <Route path = "/login/leaderboard" component = {LeaderBoard} exact  />

            </Switch>
      </div>
      </Router>
      )
  }
}

export default App;

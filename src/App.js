import React, { Component } from 'react';
import HomePage from "./screens/home/home";
// import Header from "./screens/header/header";
import Login from "./screens/login/login";

import Register from "./screens/register/register";

import ignite from "./screens/ignite/ignite"

import LeaderBoard from "./screens/caLeaderboard/js/caLeaderboard"
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
// import CaLeaderboard from './screens/caLeaderboard/js/caLeaderboard';


class App extends Component{
constructor(){
  super()
  this.state = {
    auth :localStorage.getItem('ca_token')
  }
}

  render(){
    return(
      <Router>
      <div>
           <Switch>
    
              <Route exact path = "/" component = {HomePage}   />
              <Route exact path = "/login" component = {Login}  />

              <Route exact path = "/register" component = {Register} />
              {console.log(this.state.auth,"ahdgsdagk")}
              {
                this.state.auth ? <Route exact path = "/dashboard" component = {LeaderBoard}/>:
                <Route exact path = "/login" component = {Login} />
              }
              

              <Route path = "/ignite" component = {ignite} />


            </Switch>
      </div>
      </Router>
      )
  }
}

export default App;

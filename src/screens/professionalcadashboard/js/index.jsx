import React, { Component } from "react";
// import HomePage from "./screens/home/home";
// import Header from "./screens/header/header";
// import Login from "./screens/login/login";
// import Register from "./screens/register/register";
// import ignite from "./screens/ignite/ignite"
// import Lfooter from "./screens/footer/landingpagefooter"
// import LeaderBoard from "./screens/caLeaderboard/js/caLeaderboard"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Viewprofile from './Viewprofile'
import LeaderBoard from "./Sidenavbar"
import CATaskBoard from "./catask"
import CAOffers from './offers'
import CAPayment from './payment'
import CAInvite from './cainvite'
import CALeader from './caleader'
import CAcontigent from './cacontigent'





 

class App extends Component {
  constructor() {
    super();
    this.state = {
    
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
          <React.Fragment>
           
            
          <Route path="/prodashboard" component={LeaderBoard} />
            
          
            <Route exact path="/prodashboard/Viewprofile" component={Viewprofile} />
            <Route exact path="/prodashboard/task" component={CATaskBoard} />
            <Route exact path="/prodashboard/offers" component={CAOffers} />
            <Route exact path="/prodashboard/payment" component={CAPayment} />
            <Route exact path="/prodashboard/invite" component={CAInvite} />
            <Route exact path="/prodashboard/leader" component={CALeader} />
            <Route exact path="/prodashboard/contigent" component={CAcontigent} />



          
            
          </React.Fragment>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

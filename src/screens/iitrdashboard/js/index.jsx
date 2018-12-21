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
           
            
          <Route path="/iitrdashboard" component={LeaderBoard} />
            
          
            <Route exact path="/iitrdashboard/Viewprofile" component={Viewprofile} />
            <Route exact path="/iitrdashboard/task" component={CATaskBoard} />
            <Route exact path="/iitrdashboard/offers" component={CAOffers} />
            <Route exact path="/iitrdashboard/payment" component={CAPayment} />
            <Route exact path="/iitrdashboard/invite" component={CAInvite} />
            <Route exact path="/iitrdashboard/leader" component={CALeader} />
            <Route exact path="/iitrdashboard/contigent" component={CAcontigent} />



          
            
          </React.Fragment>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

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
           
            
          <Route path="/professordashboard" component={LeaderBoard} />
          
            
          
            <Route exact path="/professordashboard/Viewprofile" component={Viewprofile} />
            <Route exact path="/professordashboard/task" component={CATaskBoard} />
            <Route exact path="/professordashboard/offers" component={CAOffers} />
            <Route exact path="/professordashboard/payment" component={CAPayment} />
            <Route exact path="/professordashboard/invite" component={CAInvite} />
            <Route exact path="/professordashboard/leader" component={CALeader} />
            <Route exact path="/professordashboard/contigent" component={CAcontigent} />



          
            
          </React.Fragment>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

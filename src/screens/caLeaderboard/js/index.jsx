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
import LeaderBoard from "./caLeaderboard"
import CATaskBoard from "./catask"
import CAOffers from './offers'
import CAPayment from './payment'
import CAInvite from './cainvite'
import CALeader from './caleader'






 

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
           
            
          <Route path="/dashboard" component={LeaderBoard} />
            
          
            <Route exact path="/dashboard/Viewprofile" component={Viewprofile} />
            <Route exact path="/dashboard/task" component={CATaskBoard} />
            <Route exact path="/dashboard/offers" component={CAOffers} />
            <Route exact path="/dashboard/payment" component={CAPayment} />
            <Route exact path="/dashboard/invite" component={CAInvite} />
            <Route exact path="/dashboard/leader" component={CALeader} />



          
            
          </React.Fragment>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

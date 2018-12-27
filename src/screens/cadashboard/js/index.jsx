import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Viewprofile from './Profile/profile';
import LeaderBoard from "./Sidenavbar"
import CATaskBoard from "./catask"
import CAOffers from './payment'
import CAPayment from './payment'
import CAInvite from './cainvite'
import CALeader from './caleader'
import CAcontigent from './payment'





 

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
            <Route exact path="/dashboard/contigent" component={CAcontigent} />
            <Route exact path="/dashboard/events" component={CAcontigent} />
          </React.Fragment>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

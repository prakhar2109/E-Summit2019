import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Viewprofile from './Profile/profile';
import LeaderBoard from "./Sidenavbar"
import CATaskBoard from "./catask"
import CAOffers from './payment'
import CAPayment from './payment/paymentwithoutworkshop'
import CAInvite from './cainvite'
import CALeader from './caleader'
// import CAcontigent from './payment'
import CAevents from './payment'

// import CAevents from './events'
import CAnewcontigent from './cacontigent'


// import CAevents from './cacontigent'
// import { BASE_URL } from  './../../../../utils/urls'
import axios from "axios";





 

class App extends Component {
  constructor() {
    super();
    this.state = {
    
    };
  }
componentDidMount = () =>{
  let token = localStorage.getItem("user_token");
            
}
  render() {
    let{dashboardProps} = this.props
    console.log(this.props)
    console.log(dashboardProps,'dvd')
    return (
      <Router>
        <div>
          <Switch>
          <React.Fragment>
            <Route path="/dashboard" component={LeaderBoard} /> 
            <Route exact path="/dashboard/Viewprofile" component={Viewprofile} />
            <Route exact path="/dashboard/task" component={CATaskBoard} />
            <Route exact path="/dashboard/offers" component={CAOffers} />
            <Route path="/dashboard/payment" render={() => <CAPayment {...this.props}/>} />
            <Route exact path="/dashboard/invite" component={CAInvite} />
            <Route exact path="/dashboard/leader" component={CALeader} />
            {/* <Route exact path="/dashboard/contigent" component={CAcontigent} /> */}
            <Route exact path="/dashboard/contigent" component={CAnewcontigent} />

            {/* <Route exact path="/dashboard/events" component={CAcontigent} /> */}
          </React.Fragment>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IdeaStorm from "./NewScreens/IdeaStorm/ideastorm"

import Loadable from 'react-loadable';
import Loader from './screens/common/loader';
import LandingPage from "./NewScreens/landing/landing";
import Speakers from "./NewScreens/speakers/speakers";
import Sponsors from "./NewScreens/sponsors/sponsors";
import FAQBoard from "./NewScreens/faq/faq";
import CampusAmbasder from "./NewScreens/ambasder/ambasder";
import Registration from "./components/RegistrationPortal/Index";
 
 

const Login = Loadable({
  loader: () => import("./screens/login/login"),

  loading: () => <Loader />,

});


const Stepform = Loadable({
  loader: () => import("./components/Stepform"),

  loading: () => <Loader />,

});

const Timeline = Loadable({
  loader: () => import("./components/timeline/Index"),

  loading: () => <Loader />,

});


const HomePage = Loadable({
  loader: () => import("./screens/home/home"),
  loading: () => <Loader />,
});

const ignite = Loadable({
  loader: () => import("./screens/ignite/ignite"),
  loading: () => <Loader />,
});

const Register = Loadable({
  loader: () => import("./screens/register/register"),
  loading: () => <Loader />,
});

const RegisterPortalIndex = Loadable({
  loader: () => import("./components/RegistrationPortal/Index"),
  loading: () => <Loader />,
});



 
const LeaderBoard = Loadable({
  loader: () => import("./screens/caLeaderboard/js/caLeaderboard"),
  loading: () => <Loader />,
});

const SocialLogin = Loadable({
  loader: () => import("./components/Index"),
  loading: () => <Loader />,
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: localStorage.getItem("ca_token"),
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
          <React.Fragment>
          

            <Route path = "/ideastorm" component = {IdeaStorm} />
            <Route path = "/" component = {LandingPage} exact/>
            <Route path = "/speakers" component = {Speakers} />
            <Route path  = "/sponsors" component = {Sponsors} />
            <Route path = "/faq" component = {FAQBoard} />
            <Route path = "/campusambasder" component = {CampusAmbasder} />
            <Route path = "/registration_portal" component = {Registration} />
          </React.Fragment>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

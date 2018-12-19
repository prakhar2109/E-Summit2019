import React, { Component } from "react";
// import HomePage from "./screens/home/home";
// import Header from "./screens/header/header";
// import Login from "./screens/login/login";
// import Register from "./screens/register/register";
// import ignite from "./screens/ignite/ignite"
 
// import LeaderBoard from "./screens/caLeaderboard/js/caLeaderboard"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IdeaStorm from "./NewScreens/IdeaStorm/ideastorm"

import Loadable from 'react-loadable';
import Loader from './screens/common/loader';
import LandingPage from "./NewScreens/landing/landing";
import Speakers from "./NewScreens/speakers/speakers";
import Sponsors from "./NewScreens/sponsors/sponsors";
import FAQBoard from "./NewScreens/faq/faq";
import CampusAmbasder from "./NewScreens/ambasder/ambasder"
import LoginComponent from "./components/login/login";


 
// import CaLeaderboard from './screens/caLeaderboard/js/caLeaderboard';
// const Loading = ({ error }) => {
//   if (error) {
//     return <div>Error loading component</div>;
//   } else {
//     return <Loader />;
//   }
// };

const Login = Loadable({
  loader: () => import("./screens/login/login"),

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

// const Lfooter = Loadable({
//   loader: () => import("./screens/footer/landingpagefooter"),
//   loading: () => Loading
// });

const LeaderBoard = Loadable({
  loader: () => import("./screens/caLeaderboard/js/caLeaderboard"),
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
 
          </React.Fragment>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

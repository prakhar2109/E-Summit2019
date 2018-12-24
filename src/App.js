import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IdeaStorm from "./NewScreens/IdeaStorm/ideastorm";

import LandingPage from "./NewScreens/landing/landing";
import Speakers from "./NewScreens/speakers/speakers";
import Sponsors from "./NewScreens/sponsors/sponsors";
import FAQBoard from "./NewScreens/faq/faq";
import CampusAmbasder from "./NewScreens/ambasder/ambasder";
import Registration from "./components/RegistrationPortal/Index";

import ScrollToTop from "./screens/common/scrolltotop";

import "antd/dist/antd.css";

import Caindex from "./screens/cadashboard/js/index";
import Iitrindex from "./screens/iitrdashboard/js/index";
import Noniitrindex from "./screens/noniitrdashboard/js/index";
import Professionalindex from "./screens/professionalcadashboard/js/index";
import Professorindex from "./screens/professordashboard/js/index";
import Payment from "./screens/cadashboard/js/payment";

import Loadable from "react-loadable";
import Loader from "./screens/common/loader";

const Loading = ({ error }) => {
  if (error) {
    return <div> Error loading component </div>;
  } else {
    return <Loader />;
  }
};

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
  loader: () => import("./NewScreens/startupignite/ignite"),
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
      <BrowserRouter>
        <React.Fragment>
          <div>
            <Switch>
              <ScrollToTop>
                <Route path="/ideastorm" component={IdeaStorm} />
                <Route path="/" component={LandingPage} exact />
                <Route path="/speakers" component={Speakers} />
                <Route path="/sponsors" component={Sponsors} />
                <Route path="/faq" component={FAQBoard} />
                <Route path="/campusambasder" component={CampusAmbasder} />
                <Route path="/ignite" component={ignite} />
                <Route path="/registration_portal" component={Registration} />
                <Route exact path="/payment" component={Payment} />
                <Route path="/dashboard/" component={Caindex} />
                <Route path="/iitrdashboard/" component={Iitrindex} />
                <Route path="/noniitrdashboard/" component={Noniitrindex} />
                <Route path="/prodashboard/" component={Professionalindex} />
                <Route path="/professordashboard/" component={Professorindex} />
              </ScrollToTop>
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

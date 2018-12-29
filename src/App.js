import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";  
import FAQBoard from "./NewScreens/faq/faq";
import CampusAmbasder from "./NewScreens/ambasder/ambasder";
import Registration from "./components/RegistrationPortal/registration/Index";
import Login from "./components/RegistrationPortal/login/Index";
import ScrollToTop from "./screens/common/scrolltotop";
import "antd/dist/antd.css";
import Caindex from "./screens/cadashboard/js/index";
import Payment from "./screens/cadashboard/js/payment";
import Loadable from "react-loadable";
import Loader from "./screens/loader/loader";

// const Loading = ({ error }) => {
//   if (error) {
//     return <div> Error loading component </div>;
//   } else {
//     return <Loader />;
//   }
// };


const ignite = Loadable({
  loader: () => import("./screens/ignite/ignite"),
  loading: () => <Loader />,
});

const LandingPage = Loadable({
  loader: () => import("./NewScreens/landing/landing"),
  loading: () => <Loader />,
});

const IdeaStorm = Loadable({
  loader: () => import("./NewScreens/IdeaStorm/ideastorm"),
  loading: () => <Loader />,
});


const Speakers = Loadable({
  loader: () => import("./NewScreens/speakers/speakers"),
  loading: () => <Loader />,
});


const Sponsors = Loadable({
  loader: () => import("./NewScreens/sponsors/sponsors"),
  loading: () => <Loader />,
});

 


class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: localStorage.getItem("user_token"),
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
                <Route path="/campusambassador" component={CampusAmbasder} />
                <Route path="/ignite" component={ignite} />
                <Route path="/register" component={Registration} />
                <Route path="/login" component={Login} />
                <Route exact path="/payment" component={Payment} />
                <Route path="/dashboard/" component={Caindex} />
                <Route path ="/loader" component = {Loader} />
                {/* <Route path="/iitrdashboard/" component={Iitrindex} />
                <Route path="/noniitrdashboard/" component={Noniitrindex} />
                <Route path="/prodashboard/" component={Professionalindex} />
                <Route path="/professordashboard/" component={Professorindex} />
                <Route exact path="/cont" component={Contingent} /> */}

              </ScrollToTop>
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

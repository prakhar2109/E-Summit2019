import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/RegistrationPortal/login/Index";
import ScrollToTop from "./screens/common/scrolltotop";
import "antd/dist/antd.css";
import PaymentStatus from './screens/cadashboard/js/paymentstatus'
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


const FAQBoard = Loadable({
  loader: () => import("./NewScreens/faq/faq"),
  loading: () => <Loader />,
});

const CampusAmbasder = Loadable({
  loader: () => import("./NewScreens/ambasder/ambasder"),
  loading: () => <Loader />,
});

const Registration = Loadable({
  loader: () => import("./components/RegistrationPortal/registration/Index"),
  loading: () => <Loader />,
});

const Caindex = Loadable({
  loader: () => import("./screens/cadashboard/js/index"),
  loading: () => <Loader />,
});

const Productathon = Loadable({
  loader: () => import("./components/Productathon/Index"),
  loading: () => <Loader />,
});

const ResetPassword = Loadable({
  loader: () => import("./components/RegistrationPortal/reset/Index"),
  loading: () => <Loader />,
});

const Test = Loadable({
  loader: () => import("./components/Events/EventComponent/Index"),
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
      // <PaymentStatus></PaymentStatus>
      <BrowserRouter>
        <React.Fragment>
          <div>
            <Switch>
              <ScrollToTop>
                {/* <Route path="/paymentstatus" component={PaymentStatus} /> */}
                {/* <Route path="/ideastorm" component={IdeaStorm} /> */}
                <Route path="/" component={LandingPage} exact />
                <Route path="/speakers" component={Speakers} />
                <Route path="/sponsors" component={Sponsors} />
                <Route path="/faq" component={FAQBoard} />
                <Route path="/campusambassador" component={CampusAmbasder} />
                <Route path="/ignite" component={ignite} />
                <Route path="/register" component={Registration} />
                <Route path="/resetPassword/" component={ResetPassword} />
                <Route path="/login" component={Login} />
                <Route path="/productathon" component={Productathon} />
                <Route path="/dashboard/" component={Caindex} />
                {/* <Route exact path="/test" component={test} /> */}
                <Route path="/:id" render={(props) => <Test {...props} />} />
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

import React, { Component } from "react";
// import HomePage from "./screens/home/home";
// import Header from "./screens/header/header";
// import Login from "./screens/login/login";
// import Register from "./screens/register/register";
// import ignite from "./screens/ignite/ignite"
// import Lfooter from "./screens/footer/landingpagefooter"
// import LeaderBoard from "./screens/caLeaderboard/js/caLeaderboard"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loadable from 'react-loadable';
import Loader from './screens/common/loader';


 
// import CaLeaderboard from './screens/caLeaderboard/js/caLeaderboard';
const Loading = ({ error }) => {
  if (error) {
    return <div>Error loading component</div>;
  } else {
    return <Loader />;
  }
};

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
            <div id = "main_class" className ="main_class"> 
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />

              {/* <Route exact path="/register" component={Register} />
            {
              this.state.auth ? <Route exact path="/dashboard" component={LeaderBoard} /> :
                <Route exact path="/login" component={Login} />
            } */}

             <Route exact path="/register" component={Register} />
            


            <Route exact path="/dashboard/" component={LeaderBoard} />
            <Route path="/ignite" component={ignite} />
            <Route path="/loader" component={Loader} />
            {/* <Route path="/footer" component={Lfooter} /> */}
            {/* <Route path="/Rselect" component={RSelect} /> */}
      
            </div>
            
          </React.Fragment>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

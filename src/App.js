import React, { Component } from "react";
// import HomePage from "./screens/home/home";
// import Header from "./screens/header/header";
// import Login from "./screens/login/login";
// import Register from "./screens/register/register";
// import ignite from "./screens/ignite/ignite"
// import Lfooter from "./screens/footer/landingpagefooter"
import 'antd/dist/antd.css'
// import LeaderBoard from "./screens/caLeaderboard/js/caLeaderboard"
import { BrowserRouter, Route, Switch} from 'react-router-dom'
// import Viewprofile from './screens/caLeaderboard/js/Viewprofile'
import Caindex from './screens/caLeaderboard/js/index'
import Payment from './screens/caLeaderboard/js/payment';

import Loadable from 'react-loadable';
import Loader from './screens/common/loader';

// import Coupon from './screens/caLeaderboard/js/coupon'

import CaLeaderboard from './screens/caLeaderboard/js/caLeaderboard';


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

// const LeaderBoard = Loadable({
//   loader: () => import("./screens/caLeaderboard/js/caLeaderboard"),
//   loading: () => <Loader />,
// });

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: localStorage.getItem("ca_token"),
    };
  } 
  // render(){
  //   return(
  //     <Payment />
  //   )
  // }

  render(){
    return (
      <BrowserRouter>
      <React.Fragment>
        <div>
          <Switch>
          <React.Fragment>
         
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/payment" component={Payment} />
            
              {/* <Route exact path="/register" component={Register} />
            {
              this.state.auth ? <Route exact path="/dashboard" component={LeaderBoard} /> :
                <Route exact path="/login" component={Login} />
            } */}

             {/* <Route exact path="/register" component={Register} /> */}
            


             {/* <Route exact path="/dashboard/" component={LeaderBoard} /> */}
            <Route path="/dashboard/" component={Caindex} />

            <Route path="/ignite" component={ignite} />
     
             {/* <Route path="/Viewprofile" component={Viewprofile} />  */}
             
      
            
          </React.Fragment>
          </Switch>
        </div>
        </React.Fragment>
      </BrowserRouter>
    );
          }
}

export default App;

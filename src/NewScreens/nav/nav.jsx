import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import esummit from "./static/es.png";
import { withRouter } from "react-router-dom";
 
import { HashLink } from "react-router-hash-link";

class Nav extends Component {
  componentDidMount() {
    var height = document.getElementById("nav").offsetHeight;
    height = height - 5;
    height = height + "px";

    document.getElementById("body").style.paddingTop = height;
  }


  componentWillUnmount(){
    document.getElementById("body").style.paddingTop = 0;

  }
  render() {

    let token = localStorage.getItem("user_token");
    let tabs;

    if(token !== undefined){
      tabs = (

        <span> 
        <NavLink to="/dashboard/invite">
          <span style = {{marginLeft : "3vw"}}className="login">Dashboard</span>
        </NavLink>

        
        
        </span>

      )
    }

    else{
      tabs = (
        <span> 
        <NavLink to="/registration_portal/login">
          <span className="login">Log in</span>
        </NavLink>
        <NavLink to="/registration_portal/register">
          <span className="register">Register</span>
        </NavLink>
        </span>
      )
    }
    return (
      <>
        <section id="nav" className="nav_pc">

          <span> 
          <HashLink  to="/#events">Events</HashLink>
          </span>


          <span> 
          <HashLink  to="/#speakers">Speakers</HashLink>
          </span>


          <span> 
          <HashLink  to="/#sponsors">Sponsors</HashLink>
          </span>

            <span> 
          <HashLink  to="/#faq">FAQs</HashLink>
          </span>

            <span> 
          <HashLink  to="/#talk">Contact Us</HashLink>
          </span>
          <span className="eslogo">
            <NavLink to="/">
              <img style = {{height : "7vh"}} alt="ESummit Logo" src={esummit} />
            </NavLink>
          </span>
          <span>
            <NavLink to="/campusambasder">Campus Ambassador</NavLink>
          </span>
          <span>
            <NavLink to="/ignite">Startup Ignite</NavLink>
          </span>

          <span> 
            {tabs}
          </span>
        </section>
      </>
    );
  }
}

export default withRouter(Nav);

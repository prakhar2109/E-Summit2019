import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import esummit from "./static/es.png";
import { withRouter } from "react-router-dom";
import "./css/nav.scss";
import { HashLink } from "react-router-hash-link";

class Nav extends Component {
  componentDidMount() {
    var height = document.getElementById("nav").offsetHeight;
    height = height - 5;
    height = height + "px";

    document.getElementById("body").style.paddingTop = height;
  }
  render() {
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
              <img alt="ESummit Logo" src={esummit} />
            </NavLink>
          </span>
          <span>
            <NavLink to="/campusambasder">Campus Ambassador</NavLink>
          </span>
          <span>
            <NavLink to="/ignite">Startup Ignite</NavLink>
          </span>
          <NavLink to="/login">
            <span className="login">Log in</span>
          </NavLink>
          <NavLink to="/register">
            <span className="register">Register</span>
          </NavLink>
        </section>
      </>
    );
  }
}

export default withRouter(Nav);

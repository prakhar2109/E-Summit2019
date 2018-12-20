import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import esummit from "./static/es.png";
import { withRouter } from "react-router-dom";
import "./css/nav.scss";
import { Link } from "react-scroll";

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
    return (
      <>
        <section id="nav" className="nav_pc">
          <span>
            <Link
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Events
            </Link>
          </span>

          <span>
            <Link
              activeClass="active"
              to="speakers"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Speakers
            </Link>
          </span>
          <span>
            <Link
              activeClass="active"
              to="sponsors"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Sponsors
            </Link>
          </span>
          <span>
            <Link
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              FAQs
            </Link>
          </span>

         <span>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact Us
            </Link>
          </span>
          <span className = "eslogo">
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
          <NavLink to="/registration_portal/register">
            <span className="register">Register</span>
          </NavLink>
        </section>
      </>
    );
  }
}

export default withRouter(Nav);

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";

export default class ComingSoon extends Component {
  constructor() {
    super();
    this.state = {
      displaynavbar: false,
      navdisplay: true,
      isActive: window.location.pathname.substring(1),
    };
  }
  componentDidMount() {
    if (window.innerWidth >= 1200 ) {
      this.setState({ navdisplay: false });
    }
  }

  render() {
    return (
      <div id="nav" className="Eventsheader">
        <NavLink to="/">
          {" "}
          <div className="idealogo" />
        </NavLink>

        <span className="mobile_menu">
          <div className="ecell-special-navbar-toggle">
            <div
              className={
                !this.state.displaynavbar
                  ? "new-navbarevent-i"
                  : "new-navbarevent-i span-cross"
              }
              onClick={() =>
                this.setState({
                  displaynavbar: !this.state.displaynavbar,
                })
              }
            >
              <span>
                <i />
              </span>
              <span>
                <i />
              </span>
              <span>
                <i />
              </span>
            </div>
          </div>
          {this.state.navdisplay ? (
            <div
              className={
                this.state.displaynavbar
                  ? "ecell-mobile-navbarevent-active"
                  : "ecell-mobile-navbar-inactive"
              }
            >
              <div
                className={
                  this.state.displaynavbar
                    ? "navbar-show ecell-mobile-menuback"
                    : "navbar-hide ecell-mobile-menuback"
                }
              >
                <p
                  className={
                    this.state.isActive === "Events"
                      ? "esummit-navbarevent-cto-active"
                      : "esummit-navbarevent-cto-inactive"
                  }
                  onClick={() => this.setState({ isActive: "Events",displaynavbar: !this.state.displaynavbar, })}
                >
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
                </p>
              </div>

              <div
                className={
                  this.state.displaynavbar
                    ? "navbar-show ecell-mobile-menuback"
                    : "navbar-hide ecell-mobile-menuback"
                }
              >
                <p
                  className={
                    this.state.isActive === "speakers"
                      ? "esummit-navbarevent-cto-active"
                      : "esummit-navbarevent-cto-inactive"
                  }
                  onClick={() => this.setState({ isActive: "speakers",displaynavbar: !this.state.displaynavbar, })}
                >
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
                </p>
              </div>

              <div
                className={
                  this.state.displaynavbar
                    ? "navbar-show ecell-mobile-menuback"
                    : "navbar-hide ecell-mobile-menuback"
                }
              >
                <p
                  className={
                    this.state.isActive === "Sponsors"
                      ? "esummit-navbarevent-cto-active"
                      : "esummit-navbarevent-cto-inactive"
                  }
                  onClick={() => this.setState({ isActive: "Sponsors",displaynavbar: !this.state.displaynavbar,})}
                >
                  <Link
                    activeClass="active"
                    to="sponsors"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Partners
                  </Link>
                </p>
              </div>

              <div
                className={
                  this.state.displaynavbar
                    ? "navbar-show ecell-mobile-menuback"
                    : "navbar-hide ecell-mobile-menuback"
                }
              >
                <p
                  className={
                    this.state.isActive === "FAQs"
                      ? "esummit-navbarevent-cto-active"
                      : "esummit-navbarevent-cto-inactive"
                  }
                  onClick={() => this.setState({ isActive: "FAQs" ,displaynavbar: !this.state.displaynavbar,})}
                >
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
                </p>
              </div>

              <div
                className={
                  this.state.displaynavbar
                    ? "navbar-show ecell-mobile-menuback"
                    : "navbar-hide ecell-mobile-menuback"
                }
              >
                <p
                  className={
                    this.state.isActive === "Contact"
                      ? "esummit-navbarevent-cto-active"
                      : "esummit-navbarevent-cto-inactive"
                  }
                  onClick={() => this.setState({ isActive: "Contact",displaynavbar: !this.state.displaynavbar, })}
                >
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
                </p>
              </div>

              <div
                className={
                  this.state.displaynavbar
                    ? "navbar-show ecell-mobile-menuback"
                    : "navbar-hide ecell-mobile-menuback"
                }
              >
                <p
                  className={
                    this.state.isActive === "Ambassador"
                      ? "esummit-navbarevent-cto-active"
                      : "esummit-navbarevent-cto-inactive"
                  }
                  onClick={() => this.setState({ isActive: "Ambassador" ,displaynavbar: !this.state.displaynavbar,})}
                >
                  <NavLink to="/campusambassador">Campus Ambassador</NavLink>
                </p>
              </div>




              <div
                className={
                  this.state.displaynavbar
                    ? "navbar-show ecell-mobile-menuback"
                    : "navbar-hide ecell-mobile-menuback"
                }
              >
                <p
                  className={
                    this.state.isActive === "ignite"
                      ? "esummit-navbarevent-cto-active"
                      : "esummit-navbarevent-cto-inactive"
                  }
                  onClick={() => this.setState({ isActive: "ignite" ,displaynavbar: !this.state.displaynavbar,})}
                >
                  <NavLink to="/ignite">Startup Ignite</NavLink>
                </p>
              </div>




              <div
                className={
                  this.state.displaynavbar
                    ? "navbar-show ecell-mobile-menuback"
                    : "navbar-hide ecell-mobile-menuback"
                }
              >
                <p
                  className={
                    this.state.isActive === "Events"
                      ? "esummit-navbarevent-cto-active"
                      : "esummit-navbarevent-cto-inactive"
                  }
                  onClick={() => this.setState({ isActive: "Events" ,displaynavbar: !this.state.displaynavbar,})}
                >
                  <NavLink to="/register">
                    {" "}
                    Register{" "}
                  </NavLink>
                </p>
              </div>

              <div
                className={
                  this.state.displaynavbar
                    ? "navbar-show ecell-mobile-menuback"
                    : "navbar-hide ecell-mobile-menuback"
                }
              >
                <p
                  className={
                    this.state.isActive === "Events"
                      ? "esummit-navbarevent-cto-active"
                      : "esummit-navbarevent-cto-inactive"
                  }
                  onClick={() => this.setState({ isActive: "Events" ,displaynavbar: !this.state.displaynavbar,})}
                >
                  <NavLink to="/login"> Login </NavLink>
                </p>
              </div>
            </div>
          ) : null}
        </span>
      </div>
    );
  }
}

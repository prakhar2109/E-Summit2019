import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../landing/mobile_nav/header.css";
import { HashLink } from "react-router-hash-link";

export default class ComingSoon extends Component {
    constructor() {
        super();
        this.state = {
            displaynavbar: false,
            navdisplay: true,
            isActive: window
                .location
                .pathname
                .substring(1)
        };
    }
    componentDidMount() {
        if (window.innerWidth >= 1200) {
            this.setState({ navdisplay: false });
        }
    }

    render() {
        let token = localStorage.getItem("user_token");
        let tabs;

        console.log(token);

        if (token !== undefined && token !== null && token !== "") {
            tabs = (

                <span style={{ paddingLeft: "56px" }}>
                    <NavLink to="/dashboard/invite">
                        <span style={{ marginLeft: "3vw" }} className="login">Dashboard</span>
                    </NavLink>

                </span>

            )
        }

        else {
            tabs = (
                <span style={{ paddingLeft: "56px" }}>
                    <NavLink to="/login">
                        <span className="login">Log in</span>
                    </NavLink>
                    <NavLink to="/register">
                        <span className="register">Register</span>
                    </NavLink>
                </span>
            )
        }
        return (
            <div id="nav" className="Eventsheader">
                <NavLink to="/">

                    <div className="idealogo" />
                </NavLink>

                <span className="mobile_menu">
                    <div className="ecell-special-navbar-toggle">
                        <div
                            className={!this.state.displaynavbar
                                ? "new-navbarevent-i"
                                : "new-navbarevent-i span-cross"}
                            onClick={() => this.setState({
                                displaynavbar: !this.state.displaynavbar
                            })}>
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
                    {this.state.navdisplay
                        ? (
                            <div
                                className={this.state.displaynavbar
                                    ? "ecell-mobile-navbarevent-active"
                                    : "ecell-mobile-navbar-inactive"}>
                                <div
                                    className={this.state.displaynavbar
                                        ? "navbar-show ecell-mobile-menuback"
                                        : "navbar-hide ecell-mobile-menuback"}>
                                    <p
                                        className={this.state.isActive === "Events"
                                            ? "esummit-navbarevent-cto-active"
                                            : "esummit-navbarevent-cto-inactive"}
                                        onClick={() => this.setState({ isActive: "Events" })}>
                                        <HashLink to="/#events">Events</HashLink>
                                    </p>
                                </div>

                                <div
                                    className={this.state.displaynavbar
                                        ? "navbar-show ecell-mobile-menuback"
                                        : "navbar-hide ecell-mobile-menuback"}>
                                    <p
                                        className={this.state.isActive === "speakers"
                                            ? "esummit-navbarevent-cto-active"
                                            : "esummit-navbarevent-cto-inactive"}
                                        onClick={() => this.setState({ isActive: "speakers" })}>
                                        <HashLink to="/#speakers">Speakers</HashLink>
                                    </p>
                                </div>

                                <div
                                    className={this.state.displaynavbar
                                        ? "navbar-show ecell-mobile-menuback"
                                        : "navbar-hide ecell-mobile-menuback"}>
                                    <p
                                        className={this.state.isActive === "Sponsors"
                                            ? "esummit-navbarevent-cto-active"
                                            : "esummit-navbarevent-cto-inactive"}
                                        onClick={() => this.setState({ isActive: "Sponsors" })}>
                                        <HashLink to="/#sponsors">Partners</HashLink>
                                    </p>
                                </div>

                                <div
                                    className={this.state.displaynavbar
                                        ? "navbar-show ecell-mobile-menuback"
                                        : "navbar-hide ecell-mobile-menuback"}>
                                    <p
                                        className={this.state.isActive === "FAQs"
                                            ? "esummit-navbarevent-cto-active"
                                            : "esummit-navbarevent-cto-inactive"}
                                        onClick={() => this.setState({ isActive: "FAQs" })}>
                                        <HashLink to="/#faq">FAQs</HashLink>
                                    </p>
                                </div>

                                <div
                                    className={this.state.displaynavbar
                                        ? "navbar-show ecell-mobile-menuback"
                                        : "navbar-hide ecell-mobile-menuback"}>
                                    <p
                                        className={this.state.isActive === "Contact"
                                            ? "esummit-navbarevent-cto-active"
                                            : "esummit-navbarevent-cto-inactive"}
                                        onClick={() => this.setState({ isActive: "Contact" })}>
                                        <HashLink to="/#talk">Contact Us</HashLink>
                                    </p>
                                </div>

                                <div
                                    className={this.state.displaynavbar
                                        ? "navbar-show ecell-mobile-menuback"
                                        : "navbar-hide ecell-mobile-menuback"}>
                                    <p
                                        className={this.state.isActive === "Ambassador"
                                            ? "esummit-navbarevent-cto-active"
                                            : "esummit-navbarevent-cto-inactive"}
                                        onClick={() => this.setState({ isActive: "Ambassador" })}>
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
                                        onClick={() => this.setState({ isActive: "ignite", displaynavbar: !this.state.displaynavbar, })}
                                    >
                                        <NavLink to="/ignite">Startup Ignite</NavLink>
                                    </p>
                                </div>
                                <div className="esummit-mobile-navbar-register-login">
                                    {tabs}
                                </div>
                            </div>
                        )
                        : null}
                </span>
            </div>
        );
    }
}

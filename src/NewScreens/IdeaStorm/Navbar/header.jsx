import React, {Component} from "react";

import {NavLink} from "react-router-dom";

import {Link} from "react-router-dom";

import "./header.css";
import jump from "jump.js";

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
        if (window.innerWidth >= 768) {
            this.setState({navdisplay: false});
        }
    }

    timeline = () => {
        jump(".timeline", {
 
            offset: 1000
          
        });
    };

    Rules = () => {
        jump(".Rules");
    };

    erks = () => {
        jump(".erks");
    };

    faq_idea = () => {
        jump("#faq_idea");
    };

    coordinator = () => {
        jump(".coordinator");
    };

    eligiblity = () => {
        jump(".eligiblity");
    };

    render() {
        return (
            <div className="Eventsheader">
                <div className="idealogo"/>

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
                                <i/>
                            </span>
                            <span>
                                <i/>
                            </span>
                            <span>
                                <i/>
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
                                    onClick={this.timeline}
                                    className={this.state.displaynavbar
                                    ? "navbar-show ecell-mobile-menuback"
                                    : "navbar-hide ecell-mobile-menuback"}>
                                    <p
                                        className={this.state.isActive === ""
                                        ? "esummit-navbarevent-cto-active"
                                        : "esummit-navbarevent-cto-inactive"}>
                                        Timeline
                                    </p>
                                </div>

                                <div
                                    onClick={this.Rules}
                                    className={this.state.displaynavbar
                                    ? "navbar-show"
                                    : "navbar-hide"}>
                                    <p
                                        className={this.state.isActive === "ignite"
                                        ? "esummit-navbarevent-cto-active"
                                        : "esummit-navbarevent-cto-inactive"}>
                                        Rules
                                    </p>
                                </div>

                                <div
                                    onClick={this.eligiblity}
                                    className={this.state.displaynavbar
                                    ? "navbar-show"
                                    : "navbar-hide"}>
                                    <p
                                        className={this.state.isActive === "register"
                                        ? "esummit-navbarevent-cto-active"
                                        : "esummit-navbarevent-cto-inactive"}>
                                        Eligiblity
                                    </p>
                                </div>

                                <div
                                    onClick={this.erks}
                                    className={this.state.displaynavbar
                                    ? "navbar-show"
                                    : "navbar-hide"}>
                                    <p
                                        className={this.state.isActive === "register"
                                        ? "esummit-navbarevent-cto-active"
                                        : "esummit-navbarevent-cto-inactive"}>
                                        Perks
                                    </p>
                                </div>

                                <div
                                    onClick={this.register}
                                    className={this.state.displaynavbar
                                    ? "navbar-show"
                                    : "navbar-hide"}>
                                    <p
                                        className={this.state.isActive === "register"
                                        ? "esummit-navbarevent-cto-active"
                                        : "esummit-navbarevent-cto-inactive"}>
                                        Register
                                    </p>
                                </div>

                                <div
                                    onClick={this.faq_idea}
                                    className={this.state.displaynavbar
                                    ? "navbar-show"
                                    : "navbar-hide"}>
                                    <p
                                        className={this.state.isActive === "register"
                                        ? "esummit-navbarevent-cto-active"
                                        : "esummit-navbarevent-cto-inactive"}>
                                        FAQs
                                    </p>
                                </div>

                                <div
                                    onClick={this.coordinator}
                                    className={this.state.displaynavbar
                                    ? "navbar-show"
                                    : "navbar-hide"}>
                                    <p
                                        className={this.state.isActive === "register"
                                        ? "esummit-navbarevent-cto-active"
                                        : "esummit-navbarevent-cto-inactive"}>
                                        Contact US
                                    </p>
                                </div>

                            </div>
                        )
                        : null}
                </span>
            </div>
        );
    }
}

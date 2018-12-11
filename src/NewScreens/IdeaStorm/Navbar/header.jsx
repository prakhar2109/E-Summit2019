import React, {Component} from "react";

 

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
        this.setState({
            displaynavbar: !this.state.displaynavbar
        })
        jump(".timeline");
        

    };

    Rules = () => {
        this.setState({
            displaynavbar: !this.state.displaynavbar
        })
        jump(".Rules");
    };

    erks = () => {
        this.setState({
            displaynavbar: !this.state.displaynavbar
        })
        jump(".erks");
    };

    faq_idea = () => {
        this.setState({
            displaynavbar: !this.state.displaynavbar
        })
        jump("#faq_idea");
    };

    coordinator = () => {
        this.setState({
            displaynavbar: !this.state.displaynavbar
        })
        jump(".coordinator");
    };

    eligiblity = () => {
        this.setState({
            displaynavbar: !this.state.displaynavbar
        })
        jump(".eligiblity");
    };

    render() {
        return (
            <div id="nav" className="Eventsheader">
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

import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import esummit from "./static/es.png";
import {withRouter} from "react-router-dom"
import "./css/nav.scss";

class Nav extends Component {
    componentDidMount() {

        var height = document
            .getElementById("nav")
            .offsetHeight;
        height = height + "px";

        document
            .getElementById("body")
            .style
            .paddingTop = height;
    }
    render() {
        return (
            <>
 
            <section id="nav" className="nav_pc">

                <span>

                    <NavLink to="/events">Events</NavLink>
                </span>
                <span>
                    <NavLink to="/speakers">
                        Speaker
                    </NavLink>
                </span>
                <span>
                    <NavLink to="/sponsors">
                        Sponsors
                    </NavLink>
                </span>
                <span>
                    <NavLink to="/team">
                        Team
                    </NavLink>
                </span>
                <span>
                    <NavLink to="/faq">
                        FAQ
                    </NavLink>
                </span>
                <span>
                    <NavLink to="/">

                        <img alt="ESummit Logo" src={esummit}/>
                    </NavLink>
                </span>
                <span>
                    <NavLink to="/login">
                        Campus Ambassador
                    </NavLink>
                </span>
                <span>

                    <NavLink to="/ignite">
                        Startup Ignite
                    </NavLink>
                </span>
                <NavLink to="/login">

                    <span className="login">
                        Log in
                    </span>
                </NavLink>
                <NavLink to="/register">

                    <span className="register">
                        Register
                    </span>
                </NavLink>
            </section>

     
 
            </>
        );
    }
}

export default withRouter(Nav);
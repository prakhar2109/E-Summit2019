import React, { Component } from 'react';
import Header from "../Header/Index"
import axios from "axios"
import Perks from "../Perks/Index"
import ApplyNow from "../ApplyNow/Index"
import Eligibility from "../Eligibility/Index"
import FAQ from "../FAQ/Index"
import EventCo from "../EventCo/Index"
import Rules from "../Rules/Index"
import { BASE_URL } from "../../../utils/urls"
import Eventfooter from "../Common/footer/eventfooter"
import { NavLink } from "react-router-dom";
import esummit from "../Common/es.png";
import EventHeader from "../Common/Navbar/header"

class EventComponentIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
        }
    }
    componentDidMount() {
        // document 
        //     .getElementById("loader")
        //     .style
        //     .display = "grid";
        let event_name = this.props.match.params.id.charAt(0).toUpperCase() + this.props.match.params.id.slice(1)

        let data = {
            event_name: event_name
        }
        axios({
            method: "post",
            url: BASE_URL + "/v1/api/eventdetail/",
            data: data
        }).then((r) => {
            this.setState({
                data: r.data
            })
            // document
            //     .getElementById("loader")
            //     .style
            //     .display = "none";

        }).catch((response) => {
            // document
            //     .getElementById("loader")
            //     .style
            //     .display = "none";
            // window.location.href = "/"
        });
    }
    render() {
        return (
            <div className="ideastorm">
                {console.log(this.state.data, "dasdyugtduagjbdkj")}
                {this.state.data.event_logo ?
                    <EventHeader logo={this.state.data.event_logo} />
                    : null}

                <div id="nav" className="header">
                    <span>
                        {this.state.data.event_logo ?
                            <img alt="IdeaStorm" src={BASE_URL + this.state.data.event_logo} />
                            : null}
                    </span>
                    <span className="head_array">
                        {/* <span onClick={this.timeline}>Timeline</span> */}
                        <span onClick={this.Rules}>Rules</span>
                        <span onClick={this.eligiblity}>Eligiblity</span>
                        <span onClick={this.erks}>Perks</span>
                        <span onClick={this.register}>Apply</span>
                        <span onClick={this.faq_idea}>FAQs</span>
                        <span onClick={this.coordinator}>Contact Us</span>
                    </span>
                    <span />
                </div>
                {this.state.data.head_section ?
                    <Header data={this.state.data.head_section} />
                    : null}
                {this.state.data.perks ?
                    <Perks data={this.state.data.perks} />
                    : null}
                {this.state.data.faq ?
                    <FAQ data={this.state.data.faq} />
                    : null}
                {this.state.data.elligiblity ?
                    <Eligibility data={this.state.data.elligiblity} />
                    : null}
                {this.state.data.rules ?
                    <Rules data={this.state.data.rules} />
                    : null}
                {this.state.data.coordinator ?
                    <EventCo data={this.state.data.coordinator} />
                    : null}
                {this.state.data.name && this.state.data.event_data ?
                    <ApplyNow data={this.state.data.event_data} name={this.state.data.name} />
                    : null}
                <div className="es">
                    <center>
                        <NavLink to="/">
                            <img alt="Esummit Logo" src={esummit} />
                        </NavLink>
                    </center>

                    <p>
                        Go to &nbsp;
            <NavLink to="/">esummit.in</NavLink>
                    </p>
                </div>
                <Eventfooter />
            </div>
        );
    }
}

export default EventComponentIndex;
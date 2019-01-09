import React, { Component } from 'react';
import Header from "../Header/Index"
import axios from "axios"
import { BASE_URL } from "../../../utils/urls"
import Eventfooter from "../Common/footer/eventfooter"
import { NavLink } from "react-router-dom";
import esummit from "../Common/es.png";
import Eventfooter from "../Common/footer/eventfooter"
import Nav from "../Common/nav/nav"

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
            <React.Fragment>
                <Nav />
                {this.state.data.head_section ?
                    <Header data={this.state.data.head_section} />
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
            </React.Fragment>
        );
    }
}

export default EventComponentIndex;
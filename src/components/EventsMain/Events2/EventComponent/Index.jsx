import React, { Component } from 'react';
import Header from "../Header/Index"
// import axios from "axios"
// import { BASE_URL } from "../../../utils/urls"
// import Eventfooter from "../Common/footer/eventfooter"
import { NavLink } from "react-router-dom";
import esummit from "../Common/es.png";
import Eventfooter from "../Common/footer/eventfooter"
import Nav from "../Common/nav/nav"
import Body from "../Body/Index"

class EventComponentIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
        }
    }
    componentDidMount() {
        this.setState({
            data: this.props.data
        })
    }
    render() {
        return (
            <React.Fragment>
                <Nav />
                {this.state.data ?
                    <Header data={this.state.data} />
                    : null}
                {this.state.data ?
                    <Body data={this.state.data} />
                    : null}
                {/* <div className="es">
                    <center>
                        <NavLink to="/">
                            <img alt="Esummit Logo" src={esummit} />
                        </NavLink>
                    </center>

                    <p>
                        Go to &nbsp;
            <NavLink to="/">esummit.in</NavLink>
                    </p>
                </div> */}
                <Eventfooter />
            </React.Fragment>
        );
    }
}

export default EventComponentIndex;
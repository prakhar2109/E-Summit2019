import React, { Component } from 'react';
// import Vector from '../Common/img/headVector.png';
import '../Common/ignite.css';
import { BASE_URL } from "../../../../utils/urls"

export default class HeaderEvents2 extends Component {

    render() {
        return (
            <div className="suignite-parent">
                <div className="suignite-parent-img" style={{
                    backgroundImage: `url(${BASE_URL + this.props.data.logo})`
                }}></div>
                <p>{this.props.data.title}</p>
                <p>{this.props.data.tagline}</p>
                <p>{this.props.data.long_description}</p>
            </div>
        );
    }
}


import React, { Component } from 'react';
import "./css/common.css"
import esummit_logo from "./svg/esummit_logo.svg"
export default class CommonIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="esummit-common-parent-common">
                <div className="esummit-common-first-child">
                    <div className="esummit-common-grand-child-first">
                        <img src={esummit_logo} alt="esummit_logo"/>
                    </div>
                </div>
            </div>
        );
    }
}

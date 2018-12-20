import React, { Component } from 'react';
import ecell_logo from "./svg/ecell_logo.svg"
import "./css/common.css"

export default class CommonIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div >
                <div className="esummit-common-first-child">
                    <div className="esummit-common-grand-child-first">
                        <div></div>
                    </div>
                    <div className="esummit-common-grand-child-second">
                        <img src={ecell_logo} />
                    </div>
                </div>
                <div className="esummit-common-second-child">
                    <hr className="esummit-common-dotted-line" />
                    <span>E-SUMMIT’19 REGISTRATION PORTAL</span>
                    <hr className="esummit-common-dotted-line" />
                </div>
            </div>
        );
    }
}

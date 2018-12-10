import React, { Component } from 'react';
import Vector from "./static/headVector.png";
import "./css/header.scss";

class Header extends Component {
    render() {
        return (
            <div>
            <img className="vector" src={Vector} alt=""/>
            <p  className="head1">{this.props.title}</p>    
            </div>
        );
    }
}

export default Header;
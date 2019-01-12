import React, { Component } from 'react';
import Vector from '../Common/img/headVector.png';
import '../Common/ignite.css';

export default class HeaderEvents2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="suignite-parent">
                <div className="suignite-parent-img" style={{
                    backgroundImage: `url()`
                }}></div>
                <p>STARTUP IGNITE</p>
                <p>Be a part of something bigger</p>
                <p>The Idea Storm is the annual business model competition organized by Entrepreneurship Cell, IIT Roorkee in its flagship event, the E-Summit. Every year, IIT Roorkee is a spectacle to over 400 startups showcasing their business, vision and novelty. The plans that are judged to be the best, get mentorship and a prize money as the funding. Gear up to compete with the best minds in the country to prove your business acumen . If you want to turn your idea into an entrepreneur venture, we have got the perfect stage for you!
                </p>
            </div>
        );
    }
}


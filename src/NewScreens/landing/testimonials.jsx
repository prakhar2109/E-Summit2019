import React, { Component } from 'react';
import Richard from "./static/richard.jpg";

class Testimonials extends Component {
    render() {
        return (
            <section id="testinomial">
            <div className="land_testinomial">
                <div>
                    <img src={Richard} alt="Richard"/>
                    <p className = "testimonial">Entrepreneurship is about turning what excites you in life into capital, so
                        that you can do more of it and move forward with it.</p>
                    <p className="name">
                        RICHARD BRANSON</p>
                    <p className="designation">Founder, Virgin group</p>
                </div>
            </div>
        </section>
        );
    }
}

export default Testimonials;
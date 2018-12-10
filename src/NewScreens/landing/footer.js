import React, { Component } from 'react';
import ecell from './static/image.svg';
import jump from 'jump.js';

class Footer extends Component {
    jum = () => {
        jump('.land_screen1')
    }
    render() {
        return (
            <section id="foot">

                    <center>

                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube-square"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-twitter-square"></i>
                    </center>

                    <br/>
                    <br/>
                    <center >
                        <i
                            style={{
                            cursor: "pointer"
                        }}
                            onClick={this.jum}
                            className="fas fa-angle-up"></i>
                    </center>
                    <p className="back">
                        <span
                            style={{
                            cursor: "pointer"
                        }}
                            onClick={this.jum}>
                            Back to Top
                        </span>
                    </p>
                    <p className="org">
                        Organised By
                    </p>

                    <center>
                        <img alt ="Ecell Lgo" src={ecell}/>
                    </center>
                    <p className="inspire">
                        #inspireinnovation
                    </p>

                </section>
        );
    }
}

export default Footer;
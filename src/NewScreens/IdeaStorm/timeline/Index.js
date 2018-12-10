import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
import "./css/reset.css"
import "./css/style.css"
import timelinejs from "./main"

export default class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        timelinejs()
    }
    render() {
        return (
            <div className="cd-horizontal-timeline-parent">
                <section class="cd-horizontal-timeline">
                    <div class="timeline">
                        <div class="ideastormevents-wrapper">
                            <div class="ideastormevents">
                                <ol>
                                    <li><a href="#0" data-date="16/01/2014" className="selected" >Round 1</a></li>
                                    <li><a href="#0" data-date="20/03/2014" >Round 2</a></li>
                                    <li><a href="#0" data-date="09/07/2014">Round 3</a></li>
                                    <li><a href="#0" data-date="15/09/2014">Round 4</a></li>
                                </ol>

                                <span class="filling-line" aria-hidden="true"></span>
                            </div>
                        </div>

                        <ul class="cd-timeline-navigation">
                            <li><a href="#0" class="prev inactive">Prev</a></li>
                            <li><a href="#0" class="next">Next</a></li>
                        </ul>
                    </div>

                    <div class="ideastormevents-content">
                        <ol>
                            <li class="selected" data-date="16/01/2014">
                                
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				                </p>
                            </li>

                            <li data-date="20/03/2014">
                                
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				                </p>
                            </li>

                            <li data-date="09/07/2014">
                             
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				                </p>
                            </li>

                            <li data-date="15/09/2014">
                            
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				                </p>
                            </li>
                        </ol>
                    </div>
                </section>

            </div>
        );
    }
}


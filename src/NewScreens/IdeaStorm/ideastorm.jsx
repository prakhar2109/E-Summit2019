import React, {Component} from "react";
import "./ideastorm.scss";
import Header from "../../components/header";
import FAQ from "../landing/faqs";
import esummit from "./static/es.png";
import Eventfooter from './footer/eventfooter.jsx';
import Idea from "./static/idea.png";
import jump from "jump.js";
import Eventsheader from './Navbar/header'
import Vector from './static/headVector.png';
import Timelineindex from './timeline/Index.js';
import {NavLink } from "react-router-dom";

import "../landing/css/landing.scss";
export class IdeaStorm extends Component {
 
    state = {
        faq: [
            {
                id: 1,
                question: "How to  reach IIT Roorkee ?",
                answer: "eSummit being the flagship event of ECell, is held annually brings together the " +
                        "academic community, venture capitalists, new age entrepreneurs and all those pas" +
                        "sionate about entrepreneurship to common grounds. It provides an avenue to exhib" +
                        "it the entrepreneurial talent and creativity through many events like business v" +
                        "entures, product design competition, and social entrepreneurial idea competition" +
                        "."
            }, {
                id: 2,
                question: "Questions",
                answer: "answer"
            }
        ],

        current: 2
    };

    timeline = () => {
        jump(".timeline", {offset: -130});
    };

    Rules = () => {
        jump(".Rules", {offset: -130});
    };

    erks = () => {
        jump(".erks", {offset: -130});
    };

    faq_idea = () => {
        jump("#faq_idea", {offset: -130});
    };

    coordinator = () => {
        jump(".coordinator", {offset: -130});
    };

    eligiblity = () => {
        jump(".eligiblity", {offset: -130});
    };
    register = () => {
        jump(".register", {offset: -130});
    };

   

    render() {

        return (
            <div className="ideastorm">

                <Eventsheader/>

                <div id="nav" className="header">

                    <span>
                        <img alt="IdeaStorm" src={Idea}/>
                    </span>

                    <span className="head_array">
                        <span onClick={this.timeline}>Timeline</span>

                        <span onClick={this.Rules}>Rules</span>

                        <span onClick={this.eligiblity}>Eligiblity</span>

                        <span onClick={this.erks}>Perks</span>
                        <span onClick={this.register}>Register</span>
                        <span onClick={this.faq_idea}>FAQs</span>

                        <span onClick={this.coordinator}>Contact US</span>
                    </span>

                    <span/>
                </div>
                <div className="idea">
                    <p>IDEA STORM</p>

                    <p>You make it happen.</p>
                    <p>
                        The Idea Storm is the annual business model competition organized by
                        Entrepreneurship Cell, IIT Roorkee in its flagship event, the E-Summit. Every
                        year, IIT Roorkee is a spectacle to over 400 startups showcasing their business,
                        vision and novelty. The plans that are judged to be the best, get mentorship and
                        a prize money as the funding. Gear up to compete with the best minds in the
                        country to prove your business acumen . If you want to turn your idea into an
                        entrepreneurial venture, we have got the perfect stage for you!
                    </p>
                    <center>
                        <span className="register_button">APPLY FOR IDEASTORM</span>
                    </center>
                </div>

                <div name="timeline" id="timeline" className="timeline">
                    <div>
			    <img className="ideastorm-vector" src={Vector} alt=""/>
			    <p  className="ideastorm-head1">TIMELINE</p>    
            	    </div>
                    <Timelineindex/>
                </div>

                <div className="Rules">
                    <Header title="RULES & REGULATIONS"/>

                    <ol>
                        <li>
                            Each team may consist of at least three to at most five members, who need not
                            belong to the same organization.
                        </li>

                        <li>
                            Multiple teams from the same organization are allowed to participate in the
                            event.
                        </li>

                        <li>
                            The decision of the judges shall be final and binding. In the Combatant and
                            Challenger rounds, E-Cell IIT Roorkee retains the right to evaluate all ideas
                            and choose eligibility criteria.

                        </li>

                        <li>The decision of the judges shall be final and binding. In the Combatant and
                            Challenger rounds, E-Cell IIT Roorkee retains the right to evaluate all ideas
                            and choose eligibility criteria.
                        </li>
                    </ol>
                </div>

                <div className="eligiblity">
                    <Header title="ELIGIBILITY CRITERIA"/>
                    <ol>
                        <li>
                            There is no restriction on any individual to participate. Members of all
                            educational and professional fraternities are welcome to participate.
                        </li>

                        <li>
                            Start-ups which have been incorporated more than a year ago (i.e. registered on
                            or before 1 December, 2017) are not eligible to participate in the Idea Storm.
                        </li>
                        <li>
                            Ventures that have acquired funding from external investor-networks (angels,
                            VC's, etc) cannot participate. We believe in promoting startups that require
                            assistance in the form of seed capital, mentoring and various types of
                            consultancies.
                        </li>
                    </ol>
                </div>

                <div className="erks">
                    <Header title="Perks"/>

                    <ol>
                        <li>
                            <span>Cash Rewards:</span>
                            <br/>
                            Cash Prizes of INR 2,00,000.
                        </li>
                        <li>
                            <span>Mentorship:</span>
                            <br/>
                            Mentorship opportunities from Venture Capitalists and Industry Leaders.
                        </li>

                        <li>
                            <span>
                                Networking Session</span>
                            <br/>
                            Networking session with CXOs, Angel Investors, Venture Capitalists and Industry
                            Leaders.

                        </li>

                        <li>
                            <span>Funding Opportunities</span>
                            <br/>
                            An opportunity to raise real time funds.
                        </li>

                        <li>
                            <span>Media Coverage</span>
                            <br/>
                            Could get feature on many popular media platforms.
                        </li>
                    </ol>
                </div>

                <div className="register">
                    <p className="register_now">Register Now</p>
                    <p>
                        To participate in Idea-Storm 2019 first apply for Ideastorm. After registering,
                        submit your enteries for stage 1.
                    </p>
                    <center>
                        {" "}
                        <span>APPLY FOR IDEASTORM</span>
                        <span>APPLY FOR ROUND 1</span>
                    </center>
                </div>

                <div className="register_mobile">
                    <p className="register_now">Register Now</p>
                    <p>
                        To participate in Idea-Storm 2019 register here.
                    </p>
                    <center>
                        <span>APPLY FOR IDEASTORM</span>
                    </center>
                    <p>After registering, submit your enteries for stage 1.</p>
                    <center>
                        <span>APPLY FOR ROUND 1</span>
                    </center>
                </div>

                <div id="faq_idea">
                    <FAQ faqList={this.state.faq}/>
                </div>
                <div className="coordinator">
                    <Header title="EVENT CO-ORDINATOR"/>

                    <div className="coordinator_grid">
                        <div className="coordinator_unit">
                            <p>Rachit Garg</p>

                            <p>+91 9992929203</p>
                            <p>rachitgarg</p>
                        </div>

                        <div className="coordinator_unit">
                            <p>
                                Harshit Dubey
                            </p>

                            <p>+91 7412883060</p>
                        </div>

                    </div>
                </div>

                <div className="es">
                    <center>
                        <NavLink to ="/">
                            <img alt="Esummit Logo" src={esummit}/>
                        </NavLink>
                    </center>

                    <p>
                        Go to &nbsp;
                        <NavLink to ="/"> 
                            esummit.in
                        </NavLink>
                    </p>
                </div>
                <Eventfooter/>
            </div>
        );
    }
}

export default IdeaStorm;

import React, { Component } from "react";
import "../../NewScreens/IdeaStorm/ideastorm.css";
import Header from "../../components/header";
import Eventfooter from "../../NewScreens/IdeaStorm/footer/eventfooter";
import jump from "jump.js";
import Eventsheader from "../../NewScreens/IdeaStorm/Navbar/header";
// import Timelineindex from "../../NewScreens/IdeaStorm/timeline/Index";
import { NavLink } from "react-router-dom";
import esummit from "../../NewScreens/IdeaStorm/static/es.png";
import "../../screens/ignite/css/scrollanimation.css"
import FAQBoard from '../../NewScreens/landing/faqs'
import "../../NewScreens/landing/css/landing.scss";
import "../../screens/ignite/css/ignite.scss";
import "../../screens/ignite/css/scrollanimation.css";
import "./style.css"
import skill from "./partners/skill.png"
import he from "./partners/he.png"
import gfg from "./partners/gfg.png"
import product_logo from "./logo.png"
import fdc from "./partners/fdc.png"
import meeting from "./perks/one.png"
import handshake from "./perks/handshake.png"
import tshirt from "./perks/t-shirt.png"
import online from "./perks/online.png"
import trophy from "./perks/trophy.png"

export class IdeaStorm extends Component {
    state = {
        faq: [
            {
                id: 2,
                question: "What is a Productathon?",
                answer:
                    "Productathon is an intense product development meet for creating product-driven technology for those who want to lead innovation and creating a modernized product. Productathon is a design sprint-like event in which computer programmer, designer, product manager, software developers collaborate intensively to complete a problem statement. Productathon give opportunity to all the Creators and Innovators to showcase their skills and compete with the best talent of the nation. Participants will work in small groups to create a prototype before the deadline as per their problem statement. The aim of Productathon would be creating futuristic technology which matches main motive of the E-summit 2019.",
            },
            {
                id: 3,
                question: "What is an offline Productathon?",
                answer:
                    "At an offline Productathon, participants work collaboratively to innovate at a physical location. In this format, organizers will need to consider time, geographical, and logistical constraints while designing the Productathon. In an offline Productathon, organizing workshops, hosting knowledge-sharing sessions, and getting the venue, tools, and other aspects of the working environment ready are important.",
            },

            {
                id: 4,
                question: "Why should I attend a Productathon?",
                answer:
                    "Your idea will be judged by a panel of experts and then mentors will be allocated to you based on the area of their expertise.",
            },

            {
                id: 5,
                question: " How to list Productathons to your Resume? ",
                answer: [
                    "Your ideas will be judged on the basis of ",
                    "innovation in your idea , " +
                    "real-world problem it mitigates, " +
                    "the market opportunity for the idea, " +
                    " & the competitive advantage that it possesses",
                ],
            },

            {
                id: 6,
                question: "Is there any separate fee for productathon?",
                answer: "No, there is no separate fee for productathon but the participants need to pay for E-Summit’19",
            },

            {
                id: 7,
                question: "How will the productathon be judged?",
                answer:
                    "The productathon will be judged by judges across various domains.",
            },

            {
                id: 8,
                question:
                    " Is it necessary to have a team to participate in Productathon?",
                answer:
                    "Yes, you must have a team of atleast 3 members and upto 5 members with a team leader to participate in Productathon 2019.",
            },
            {
                id: 9,
                question:
                    "Why should I attend Productathon?",
                answer:
                    "Productathon is an event which provides a platform to build something new and at the same time get a chance to network with enthusiastic people across various domains.",
            },
            {
                id: 10,
                question:
                    "How to list Productathon to your Resume?",
                answer:
                    "How can give boost to his resume by mentioning the contributions made at Productathon which shows one’s interest in building products.",
            },
        ],

        current: 2,
    };

    timeline = () => {
        jump(".timeline", { offset: -130 });
    };

    Rules = () => {
        jump(".Rules", { offset: -130 });
    };

    erks = () => {
        jump(".erks", { offset: -130 });
    };

    faq_idea = () => {
        jump("#faq", { offset: -0 });
    };

    coordinator = () => {
        jump(".coordinator", { offset: -130 });
    };


    eligiblity = () => {
        jump(".eligiblity", { offset: -130 });
    };
    register = () => {
        jump(".register", { offset: -130 });
    };
    partner = () => {
        jump(".esummit-productathon-partners-parent", { offset: -130 });
    };
    jum = () => {
        jump('#rules_and_regulations')
    }

    render() {
        return (
            <div className="ideastorm">
                <Eventsheader />

                <div id="nav" className="header">
                    <span>
                        <img className="esummit-productathon-logo-css" alt="IdeaStorm" src={product_logo} />
                    </span>

                    <span className="head_array">
                        {/* <span onClick={this.timeline}>Timeline</span> */}

                        <span onClick={this.Rules}>Rules</span>

                        <span onClick={this.eligiblity}>Eligiblity</span>

                        <span onClick={this.erks}>Perks</span>
                        <span onClick={this.partner}>Partners</span>
                        <span onClick={this.register}>Apply</span>
                        <span onClick={this.faq_idea}>FAQs</span>

                        <span onClick={this.coordinator}>Contact Us</span>
                    </span>

                    <span />
                </div>
                <div className="idea esummit-productathon-parent-back-image">
                    <p className="esummit-productathon-heading-para">PRODUCTATHON</p>
                    <p>Ideate.Develop.Innovate</p>
                    <p className="esummit-productathon-cash-para">PRIZE WORTH INR 40,000<br></br>(many more goodies to win)</p>
                    <p className="esummit-productathon-para">

                    Productathon is an intense development meet for creating product-driven technology for those who want to lead innovation and create a modernized solution. Productathon is a design sprint-like event where enthusiasts across various domains collaborate to find solution to a provided problem statement. Productathon gives opportunity to all the Creators and Innovators to showcase their skills and compete with the best talent of the nation. Participants will work in small groups to create a prototype before the deadline as per the problem statement. The aim of Productathon is to help create futuristic technology which aligns with the theme of E-Summit'19.
Rules: The team members can be from different colleges/organizations.
Team Size: 3-5.
          </p>
                    <div className="esummit-productathon-register-now-button-parent">
                        <a
                            style={{ textDecoration: "none" }}
                            without rel="noopener noreferrer"
                            href="http://bit.ly/productathon"
                            target="_blank"
                        >
                            <button className="esummit-productathon-apply-now">REGISTER</button>
                        </a>
                    </div>
                    <div className="ignite-first-page-scroll">
                        <div onClick={this.Rules} className='icon-scroll'></div> <br />
                        <div id="ignite-first-page-scroll-child"> <p> SCROLL DOWN</p></div>
                    </div>
                    <center>

                    </center>

                </div>

                {/* <div name="timeline" id="timeline" className="timeline">
                    <Header title="TIMELINE" />
                    <div>
                        <img className="ideastorm-vector" src={"Vector"} alt="" />
                        <p className="ideastorm-head1">TIMELINE</p>
                    </div>
                    <Timelineindex />
                </div> */}

                <div id="rules_and_regulations" className="Rules">
                    <Header title="RULES & REGULATIONS" />

                    <ol className="esummit-productathon-ol">
                        <li>
                            Each team may consist of atleast 2 and atmost 5 members. Who neednot belong to the same organization.
            </li>

                        <li>
                            Multiple teams from the same university / organization are allowed to participate in the event.
            </li>

                        <li>
                            The decision of the judges shall be final and binding, though in all the rounds, E-Cell IIT Roorkee retains the right to evaluate all ideas and choose the eligibility criteria.
            </li>

                        <li>
                            All submissions remain the intellectual property of the individuals or organizations that developed them.
            </li>

                        <li>
                            By submitting an Entry or accepting any prize, you represent and warrant the following: you will not submit content that is copyrighted, protected by trade secret or otherwise subject to third party intellectual property rights or other proprietary rights, including privacy and publicity rights, unless you are the owner of such rights or have permission from their rightful owner to post the content; and the content submitted by you does not contain any viruses, Trojan horses, worms or other disabling devices or harmful code.
            </li>
                        <li>
                            Productathon organizers have the right at their sole discretion to determine whether an entrant is eligible for the Contest. Productathon may disqualify, at organizers’ sole discretion, Productathon entries (including, without limitation, content submitted in connection therewith) that
                (a) are in violation of third-party rights or law or regulation,
                (b) use inappropriate or explicit language or images, or display content that Productathon or Sponsors otherwise finds objectionable.

            </li>
                    </ol>
                </div>

                <div className="eligiblity">
                    <Header title="ELIGIBILITY CRITERIA" />
                    <ol>
                        <li>
                            There is no restriction on any individual to participate. Members of all educational and professional fraternities are welcome to participate.
                        </li>

                        <li>
                            Start-ups which have been incorporated more than a year ago (i.e. registered on or before 1 December, 2017) are not eligible to participate in the Idea Storm.
                        </li>
                        <li>
                            Ventures that have acquired funding from external investor-networks (angels, VC's, etc) can not participate. We believe in promoting startups that require assistance in the form of seed capital, mentoring and various types of consultancies.
                        </li>
                    </ol>
                </div>

                <div className="erks">
                    <Header title="PERKS" />
                    <center>
                        <div className="perks_array">
                            <div className="perks_unit">
                                <img src={trophy} alt="Cash Rewards" />
                                <span>Cash Rewards:</span>
                                Cash Prizes of INR 2,50,000.
              </div>

                            <div className="perks_unit">
                                <img src={meeting} alt="Mentorship" />
                                <span>Mentorship:</span>
                                Mentorship opportunities from Venture Capitalists and Industry
                                Leaders.
              </div>

                            <div className="perks_unit">
                                <img src={handshake} alt="networking" />
                                <span>Networking Session</span>
                                Networking session with CXOs, Angel Investors, Venture
                                Capitalists and Industry Leaders.
              </div>
                            <div className="perks_unit">
                                <img src={tshirt} alt="Funding" />
                                <span>Funding Opportunities</span>
                                An opportunity to raise real time funds.
              </div>
                            <div className="perks_unit">
                                <img src={online} alt="Media Coverage" />
                                <span>Media Coverage</span>
                                Get featured on many popular media platforms.
              </div>
                        </div>
                    </center>
                </div>
                <div className="esummit-productathon-partners-parent">
                    <Header title="PARTNERS" />
                    <div className="esummit-productathon-partners-body">
                        <div className="esummit-productathon-partners-body-image-parent">
                            <img src={he} alt="partners" />
                        </div>
                        <div className="esummit-productathon-partners-body-image-parent facebook-developer-circle">
                            <img src={fdc} alt="partners" />
                        </div>
                        <div className="esummit-productathon-partners-body-image-parent">
                            <img src={gfg} alt="partners" />
                        </div>
                        <div className="esummit-productathon-partners-body-image-parent">
                            <img src={skill} alt="partners" />
                        </div>
                    </div>
                </div>


                <div className="register">
                    <p className="register_now">Register Now</p>

                    <center>

                        <a
                            style={{ textDecoration: "none" }}
                            without rel="noopener noreferrer"
                            href="http://bit.ly/productathon"
                            target="_blank"
                        >
                            <span className="esummit-productathon-apply-now">APPLY FOR PRODUCTATHON</span>

                        </a>

                    </center>
                </div>

                <div className="register_mobile">
                    <p className="register_now">Register Now</p>
                    <p>To participate in Idea-Storm 2019 register here.</p>
                    <center>
                        <a
                            without rel="noopener noreferrer"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeso_7FRi2A42dVvvbzRro_XA6DoKUILfW1EB0E01RAAtus2g/viewform"
                            target="_blank"
                        >
                            {" "}
                            <span>APPLY FOR IDEASTORM</span>
                        </a>
                    </center>

                </div>
                <FAQBoard faqList={this.state.faq} />
                <div className="coordinator">
                    <Header title="EVENT CO-ORDINATORS" />

                    <div className="coordinator_grid">
                        <div className="coordinator_unit">
                            <p className="esummit-productathon-organizer-name">Ritik Singh Panwar</p>

                            <p>+91 8107600630</p>
                            <p>rpanwar@bt.iitr.ac.in</p>
                        </div>

                    </div>
                </div>

                <div className="es">
                    <center>
                        <NavLink to="/">
                            <img alt="Esummit Logo" src={esummit} />
                        </NavLink>
                    </center>

                    <p>
                        Go to &nbsp;
            <NavLink to="/">esummit.in</NavLink>
                    </p>
                </div>
                <Eventfooter />
            </div>
        );
    }
}

export default IdeaStorm;

import React, { Component } from "react";
import "./css/landing.scss";
import jump from "jump.js";
import {Element} from "react-scroll";
import Testimonials from "./testimonials";
import FAQBoard from "./faqs";
import About from "./about";
import Events from "./events";
import Team from "./team";
import Speakers from "./speakers";
import Sponsors from "./sponsors";
import Footer from "../IdeaStorm/footer/eventfooter";

import Nav from "./nav/nav.jsx";

export default class LandingPage extends Component {
  jum = () => {
    jump(".land_screen1");
  };

  state = {
    speakers: [
      {
        id: 1,
        name: "Rohit Jha",
        designation: "Founder ",
      },
      {
        id: 2,
        name: "Rohit Jha",
        designation: "Founder ",
      },
      {
        id: 3,
        name: "Rohit Jha",
        designation: "Founder ",
      },
      {
        id: 4,
        name: "Rohit Jha",
        designation: "Founder ",
      },
      {
        id: 5,
        name: "Rohit Jha",
        designation: "Founder ",
      },
    ],

    faq: [
      {
        id: 1,
        question: "How to  reach IIT Roorkee ?",
        answer:
          "eSummit being the flagship event of ECell, is held annually brings together the " +
          "academic community, venture capitalists, new age entrepreneurs and all those pas" +
          "sionate about entrepreneurship to common grounds. It provides an avenue to exhib" +
          "it the entrepreneurial talent and creativity through many events like business v" +
          "entures, product design competition, and social entrepreneurial idea competition" +
          ".",
      },
      {
        id: 2,
        question: "Questions",
        answer: "answer",
      },
    ],
  };

  render() {
    return (
      <div>
        <Nav />
        <section id="screen1">
          <div className="land_screen1">
            <a href="/registration_portal/register"><button>REGISTER NOW</button></a>
          </div>
        </section>
        <About />
        <Events />
        <Speakers />
        <Sponsors />

        <Testimonials />
        <FAQBoard faqList={this.state.faq} />

        <Element id ="talk" name="contact">
          <Footer />
        </Element>
      </div>
    );
  }
}

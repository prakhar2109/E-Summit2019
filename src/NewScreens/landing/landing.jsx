import React, { Component } from "react";
import "./css/landing.scss";
import jump from "jump.js";
import { Element } from "react-scroll";
import Testimonials from "./testimonials";
import FAQBoard from "./faqs";
import About from "./about";
import Events from "./events";
import Speakers from "./speakers";
import Sponsors from "./sponsors";
import Footer from "../IdeaStorm/footer/eventfooter";
import axios from "axios";
import { BASE_URL } from "../../utils/urls";
import { NavLink } from "react-router-dom";
import MobileNav from "./mobile_nav/header";
// import VideoMP from "./static/WebsiteVideo.mp4";
// import VideoWebm from "./static/WebsiteVideo.webm";
// import VideoOGV from "./static/WebsiteVideo.ogv";
import MobileVid from "./static/Mobile.gif"



import Nav from "./nav/nav.jsx";

export default class LandingPage extends Component {
  jum = () => {
    jump(".land_screen1");
  };

  state = {
    faq: [],
  };


  componentDidMount() {
    axios
      .get(BASE_URL + "/v1/api/faqs/")
      .then(res => {
        this.setState({
          faq: res.data,


        });
      })
  }

  render() {
    return (
      <div>
        <Nav />
        <MobileNav />
        <section id="screen1">

          <div className="land_screen1">


            <div className="PcVid" >
              <img src={MobileVid} />
            </div>


            <div className="MobVid">

              <img src={MobileVid} />
            </div>




            <NavLink to="/register"><button>REGISTER NOW</button></NavLink>

          </div>
        </section>
        <About />
        <Events />
        <Speakers />
        <Sponsors />

        <Testimonials />
        <FAQBoard faqList={this.state.faq} isHomePage/>

        <Element id="talk" name="contact">
          <Footer />
        </Element>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./css/landing.scss";
import jump from "jump.js";
import {Element} from "react-scroll";
import Testimonials from "./testimonials";
import FAQBoard from "./faqs";
import About from "./about";
import Events from "./events";
import Speakers from "./speakers";
import Sponsors from "./sponsors";
import Footer from "../IdeaStorm/footer/eventfooter";
import axios from "axios";
import {BASE_URL} from "../../utils/urls";
import {NavLink } from "react-router-dom";
import MobileNav from "./mobile_nav/header";
import Video from "./static/1.mp4";



import Nav from "./nav/nav.jsx";

export default class LandingPage extends Component {
  jum = () => {
    jump(".land_screen1");
  };

  state = {
    faq: [],
  };


  componentDidMount(){
    axios
    .get(BASE_URL + "/v1/api/faqs/")
    .then(res => {
      this.setState({
        faq:res.data,

        
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
          <video id="vid"   src={Video} autoplay="autoplay"></video>
          
            <NavLink to ="/registration_portal/register"><button>REGISTER NOW</button></NavLink>
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

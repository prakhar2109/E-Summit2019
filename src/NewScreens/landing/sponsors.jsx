import React, { Component } from "react";
import Slider from "react-slick";
import Header from "../../components/header";
import { Element } from "react-scroll";
import { NavLink } from "react-router-dom";

export default class Sponsors extends Component {
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
  };
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Element id = "sponsors" name="sponsors">
          <div className="land_sponsors">
            <Header title="SPONSORS" />
      

            <div className="speaker_slidder">
              <Slider {...settings}>
                {this.state.speakers.map(update => {
                  return (
                    <div key={update.id}>
                      <div className="img_holder" />
                      <p className="name">{update.name}</p>
                      <p className="designation">{update.designation}</p>
                    </div>
                  );
                })}
              </Slider>
            </div>

     
            <center>
              <NavLink to="/sponsors">
                <button className="all_events_button">VIEW ALL SPONSORS</button>
              </NavLink>
            </center>
          </div>
        </Element>
      </div>
    );
  }
}

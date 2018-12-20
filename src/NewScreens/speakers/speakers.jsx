import React, { Component } from "react";
import "./speakers.scss";
import Header from "../../components/header";
import Nav from "../nav/nav";
import Footer from "../IdeaStorm/Foot/eventfooter";
import Testimonial from "../landing/testimonials";

export default class speakers extends Component {
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
    return (
      <>
        <Nav />

        <div className="speakers">
          <Header title="SPEAKERS" />

          <p className="text">
            Meet the awesome companies who make this all possible.
          </p>
          <p className="speak"> E-Summit’19 Speakers</p>

          <div className="speakers_array">
            {this.state.speakers.map(update => {
              return (
                <div key={update.id}>
                  <div className="img_holder" />

                  <p className="name">{update.name}</p>
                  <p className="designation">{update.designation}</p>
                </div>
              );
            })}
          </div>
        </div>

        <Testimonial />
        <Footer />
      </>
    );
  }
}

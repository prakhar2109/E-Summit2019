import React, { Component } from "react";
import Header from "../../components/header";
import "./sponsors.scss";
import img1 from "./1.png";
import Nav from "../nav/nav";
import Footer from "../IdeaStorm/footer/eventfooter";
import MobileNav from "../mobile_nav/header";
export default class Sponsors extends Component {
  state = {
    sponsors: [
      {
        name: "Rohit Jha",
        id: 1,
      },

      {
        name: "Rohit Jha",
        id: 4,
      },

      {
        name: "Rohit Jha",
        id: 3,
      },

      {
        name: "Rohit Jha",
        id: 2,
      },


      {
        name: "Rohit Jha",
        id: 5,
      },
      

      {
        name: "Rohit Jha",
        id: 6,
      },
    ],
  };
  render() {
    return (
      <>
        <Nav />
        <MobileNav />
        <div className="sponsors">
          <Header title="SPONSORS" />
          <p className="text">
            Meet the awesome companies who make this all possible.
          </p>

          <center>
            <img className="title_sponsor_img" alt="" src={img1} />
            <span className="title_sponsor">Rohit Jha </span>
          </center>

          <div className="sponsors_array">
            {this.state.sponsors.map(update => {
              return (
                <div className="sponsors_unit " key={update.id}>
                  <div className="sonsors_logo" />
                  <div className="sponsors_name">{update.name}</div>
                </div>
              );
            })}
          </div>
          
        </div>

        <Footer></Footer>
      </>
    );
  }
}

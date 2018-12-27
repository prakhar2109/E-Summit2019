import React, { Component } from "react";
import Header from "../../components/header";
import "./sponsors.scss";
import img1 from "./1.png";
import Nav from "../nav/nav";
import Footer from "../IdeaStorm/footer/eventfooter";
import MobileNav from "../mobile_nav/header";
import axios from "axios";
import { BASE_URL } from "../../utils/urls"
export default class Sponsors extends Component {

  componentDidMount(){
    axios
    .get(BASE_URL + "/v1/api/sponsors/")
    .then(res => {
      this.setState({
        sponsors:res.data,
      });

      
    })
  };




  state = {
    sponsors: [
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

         

          <div className="sponsors_array">
            {this.state.sponsors.map(update => {
              return (
                <div className="sponsors_unit " key={update.id}>
                  <div className="sonsors_logo">
                  <img src = {update.image} alt= {update.name} />
                  </div>
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

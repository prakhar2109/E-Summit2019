import React, { Component } from "react";
import Slider from "react-slick";
import Header from "../../components/header";
import { Element } from "react-scroll";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../utils/urls"
export default class Speakers extends Component {

  componentDidMount(){
    axios
    .get(BASE_URL + "/v1/api/speakers/")
    .then(res => {
      this.setState({
        speakers:res.data,

        
      });

      
    })
  }



  state = {
    speakers: []
  
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
        <Element id = "speakers" name="speakers">
          <div className="land_speakers">
            <Header title="SPEAKERS" />
          
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

            <div className="speaker_mobile">
              <center>
                <div>
                  <div className="img_holder" />
                  <p className="name">Rohit</p>
                  <p className="designation">test</p>
                </div>
              </center>
            </div>
            <center>
              <NavLink to="/speakers">
                <button className="all_events_button">VIEW ALL SPEAKERS</button>
              </NavLink>
            </center>
          </div>
        </Element>
      </div>
    );
  }
}

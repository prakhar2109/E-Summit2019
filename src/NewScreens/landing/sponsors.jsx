import React, { Component } from "react";
import Slider from "react-slick";
import Header from "../../components/header";
import { Element } from "react-scroll";
import { NavLink } from "react-router-dom";
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
    sponsors :[],
  }
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    let settings2 = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Element id = "sponsors" name="sponsors">
          <div className="land_sponsors">
            <Header title="PARTNERS" />
      

            <div className="speaker_slidder">
              <Slider {...settings}>
                {this.state.sponsors.map(update => {
                  return (
                    <div key={update.id}>
                    <a href = {update.url}> 
                      <div className="img_holder" >
                          <img src = {update.image} alt = {update.name} />
                      </div>
                      <p className="name">{update.name}</p>
                   </a>
                    </div>
                  );
                })}
              </Slider>
            </div>


            <div className="speaker_mobile">
              <Slider {...settings2}>
                {this.state.sponsors.map(update => {
                  return (
                    <div key={update.id}>
                      <div className="img_holder">
                      <img src = {update.image} alt = {update.name} />
                      </div>

                      <p className="name">{update.name}</p>
  
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

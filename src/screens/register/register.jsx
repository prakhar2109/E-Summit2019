import React, { Component } from "react";
import "./register.css";
import Footer from "../footer/footer";
import { NavLink } from "react-router-dom";
import Header from "./../header/header";
import axios from "axios";
import Select from "react-select";
import { BASE_URL } from "../../utils/urls";
import CreatableSelect from 'react-select/lib/Creatable';

// import CollegeSelect from './College'
// import StateSelect from './state'

const gender_option = [
  { value: 0, label: "Male" },
  { value: 1, label: "Female" },
  { value: 2, label: "Others" },
  { value: 3, label: "Prefer Not Say" },
];

const options = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
  ].map(state => ({
    value: state,
    label: state,
}));

export default class Register extends Component {
  CollegeData = [];
  state = {
    name: "",
    email: "",
    contact: "",
    password: "",
    college: "",
    states: "",
    gender: "0",
    collegeArray: [],
  };
  componentDidMount() {
    axios
      .get("http://esummit.in/api/college/list")
      .then(res => {
        let CollegeData = res.data.body;
        CollegeData = CollegeData.map(item => ({
          value: item.value,
          label: item.name,
        }));
        this.setState({ collegeArray: CollegeData });
      })
      .catch(function(response) {
        alert(response);
      });
  }

  handleChange = college => {
    this.setState({ college });
  };
  handleChange3 = states => {
    this.setState({ states});
  };
  
  handleChange2 = gender => {
    this.setState({ gender });
  };
  handleClick = e => {
    e.preventDefault();
    this.state.college = this.state.college["label"];
    this.state.gender = this.state.gender["value"];
    this.state.states= this.state.states["value"];

    let user_type = 0;
    
    let data = {
      name: this.state.name,
      college: this.state.college,
      email: this.state.email,
      phone: this.state.contact,
      password: this.state.password,
      state: this.state.states,
      gender: this.state.gender,
      user_type :"AMB",
    };

    console.log(data);

    if (this.state.password.length < 8) {
      alert("Password length  must be greater than 8  ");
    } else {
      axios({
        method: "post",
        url: BASE_URL + "/v1/api/user/signup/",
        data: data,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      })
        .then(function(r) {
          var d = new Date();
          d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);

          console.log(r.data);
          if (r.data.token) {
            localStorage.setItem("ca_token", r.data.token);
          }
          window.location.href = "/dashboard";

          console.log(r.data.token);
          data = "";
        })
        .catch(function(response) {
          alert(response);
        });
    }
  };

  render() {
    const { college, gender, collegeArray } = this.state;

    return (
      <div>
        <Header />

        <div className="register_main">
          <div className="register_text">
            <span> CAMPUS AMBASSADOR</span>

            <span>
              The CAP( Campus Ambassador Programme) is a pinion initiative of
              E-Summit IIT Roorkee, 2018 organized by the Entrepreneurship Cell,
              IIT Roorkee and aims to amplify our purview to newer horizons. We
              aspire to increase our outreach to as many students as possible
              throughout the country and spread the spirit of entrepreneurship
              to similar extents. This year E-Summit IIT Roorkee brings with it
              loads and loads of colossal opportunities for the participating
              students and exciting perks for the Campus Ambassadors.{" "}
            </span>

            <rohit>
              <p>the exciting perks! </p> <br/>
              1. For every successful
              payment from the participants who have registered from the
              referral link, the CA would be awarded Rs. 150 off on the
              registration plus accommodation fees for E-Summit 2019.<br/>
               2. An official certificate from E-Summit IIT
              Roorkee will be provided as an acknowledgment of your work as a CA
              for the same.<br/>
               3. Endorsement of your LinkedIn profile by E-Summit
              IIT Roorkee.<br/>
               4. Other additional goodies and benefits will be
              awarded to the top performing CAs.
            </rohit>

            {/* <center>
              <a href="./../../pdfs/perks.pdf" target="_blank">
                {" "}
                <button>PERKS</button>
              </a>
            </center> */}
          </div>

          <div className="register_form">
            <span className="register_login">
              {" "}
              <NavLink activeClassName="act" to="/login">
                Sign In
              </NavLink>
            </span>
            <span className="register_register">
              {" "}
              <NavLink activeClassName="act" to="/register">
                Sign Up
              </NavLink>
            </span>

            <form>
              <label>NAME </label>

              <input
                type="text"
                value={this.state.name}
                onChange={event => {
                  this.setState({
                    name: event.target.value,
                  });
                }}
                placeholder="Enter your full name"
              />

              <label>PHONE NO.</label>

              <input
                type="tel"
                value={this.state.contact}
                parse={value => Number(value)}
                onChange={event => {
                  this.setState({
                    contact: event.target.value,
                  });
                }}
                placeholder="Enter your phone number"
              />

              <label>EMAIL-ID</label>

              <input
                type="email"
                value={this.state.email}
                onChange={event => {
                  this.setState({
                    email: event.target.value,
                  });
                }}
                placeholder="Enter your Email ID"
              />
              <label>PASSWORD </label>

              <input
                type="password"
                value={this.state.passowrd}
                onChange={event => {
                  this.setState({
                    password: event.target.value,
                  });
                }}
                placeholder="********"
              />
              <label>COLLEGE </label>

              <CreatableSelect
                placeholder="Enter your college name"
                value={college}
                onChange={this.handleChange}
                options={collegeArray}
                searchable={true}
								required={true}
              />

              <label> GENDER </label>
              <Select
                placeholder="Enter your gender"
                value={gender}
                onChange={this.handleChange2}
                options={gender_option}
              />

              {/*
                        <label>PROGRAMME </label>

                        <input type="text"

                        value={this.state.program}

                            onChange={event => {
                                this.setState({
                                    program: event.target.value
                                })
                            }}

                        ></input>
                        <label>YEAR </label>

                        <input type="number"

                        value={this.state.year}

                            onChange={event => {
                                this.setState({
                                    year: event.target.value
                                })
                            }}
                        ></input>
                        <label>CITY </label>

                        <input type="text"

                        value={this.state.city}

                            onChange={event => {
                                this.setState({
                                    city: event.target.value
                                })
                            }}

                        ></input>
                            */}
              <label>STATE </label>

              <Select
               
                value={this.state.states}
                // onChange={event => {
                //   this.setState({
                //     states: event.target.value,
                //   });
                // }}
                onChange={this.handleChange3}
                options={options}
                placeholder="Enter your state name"
              />

              {/*
                        <label>HOW DID YOU KNOW ABOUT CA </label>

                        <input type="text"

                        value={this.state.how}

                            onChange={event => {
                                this.setState({
                                    how: event.target.value
                                })
                            }}

                        ></input> */}
            </form>

            <br />

            <button onClick={this.handleClick}> SIGN UP </button>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

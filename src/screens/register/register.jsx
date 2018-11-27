import React, { Component } from 'react';
import './register.css';
import Footer from '../footer/footer';
import { NavLink } from 'react-router-dom';
import Header from './../header/header';
import axios from 'axios';
import Select from 'react-select';

const url = 'http://esummit.in/api/signup';

const gender_option = [
	{ value: 0, label: 'Male' },
	{ value: 1, label: 'Female' },
	{ value: 2, label: 'Others' },
	{ value: 3, label: 'Prefer Not Say' },
];


export default class ComingSoon extends Component {
	CollegeData = [];
	state = {
		name: '',
		email: '',
		contact: "",
		password: '',
		college: '',
		state: '',
		gender: '0',
    collegeArray: [],
    country :""
	};
	componentDidMount() {
		axios
			.get('http://esummit.in/api/college/list')
			.then((res) => {
				let CollegeData = res.data.body;
				CollegeData = CollegeData.map((item) => ({ value: item.value, label: item.name }));
				this.setState({ collegeArray: CollegeData });
			})
			.catch(function(response) {
				alert(response);
			});
	}

	handleChange = (college) => {
		this.setState({ college });
	};

	handleChange2 = (gender) => {
		this.setState({ gender });
	};
	handleClick = (e) => {
		e.preventDefault();
		this.state.college = this.state.college['value'];
		this.state.gender = this.state.gender['value'];
		this.state.contact = Number(this.state.contact);

		let user_type = 0;
		let data = {
			name: this.state.name,
			college: this.state.college,
			email: this.state.email,
			contact: this.state.contact,
			password: this.state.password,
			state: this.state.state,
			gender: this.state.gender,
			user_type: user_type,
		};

		console.log(data);

		if (this.state.password.length < 8) {
			alert('Password length  must be greater than 8  ');
		} else {
			axios({
				method: 'post',
				url: url,
				data: data,
				config: { headers: { 'Content-Type': 'multipart/form-data' } },
			})
				.then(function(res) {
					window.location.href = '/login';
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
							The CAP( Campus Ambassador Programme) is a pinion initiative of E-Summit IIT Roorkee, 2018
							organized by the Entrepreneurship Cell, IIT Roorkee and aims to amplify our purview to newer
							horizons. We aspire to increase our outreach to as many students as possible throughout the
							country and spread the spirit of entrepreneurship to similar extents. This year E-Summit IIT
							Roorkee brings with it loads and loads of colossal opportunities for the participating
							students and exciting perks for the Campus Ambassadors.{' '}
						</span>

						<span>Click to the see the exciting perks!</span>

						<center>
							<a href="./../../pdfs/perks.pdf" target="_blank">
								{' '}
								<button>PERKS</button>
							</a>
						</center>
					</div>

					<div className="register_form">
          <NavLink activeClassName="act" to="/login">
						<span className="register_login">
							{' '}
						
								Sign In
						
						</span>
          	</NavLink>
            <NavLink activeClassName="act" to="/register">
						<span className="register_register">
							{' '}
						
								Sign Up
					
						</span>
            </NavLink>

						<form>
							<label>NAME </label>

							<input
								type="text"
								value={this.state.name}
								onChange={(event) => {
									this.setState({
										name: event.target.value,
									});
								}}
							/>

							<label>PHONE NO.</label>

							<input
								type="tel"
								value={this.state.contact}
								parse={(value) => Number(value)}
								onChange={(event) => {
									this.setState({
										contact: event.target.value,
									});
								}}
							/>

							<label>EMAIL-ID</label>

							<input
								type="email"
								value={this.state.email}
								onChange={(event) => {
									this.setState({
										email: event.target.value,
									});
								}}
							/>
							<label>PASSWORD </label>

							<input
								type="password"
								value={this.state.passowrd}
								onChange={(event) => {
									this.setState({
										password: event.target.value,
									});
								}}
							/>

							<label>STATE </label>

							<input
								type="text"
								value={this.state.state}
								onChange={(event) => {
									this.setState({
										state: event.target.value,
									});
								}}
							/>

							<label>COLLEGE </label>

							<Select value={college} onChange={this.handleChange} options={collegeArray} />

							<label>GENDER </label>

							<Select value={gender} onChange={this.handleChange2} options={gender_option} />

							<label>PROGRAMME </label>

							<input
								type="text"
								value={this.state.program}
								onChange={(event) => {
									this.setState({
										program: event.target.value,
									});
								}}
							/>
							<label>YEAR </label>

							<input
								type="number"
								value={this.state.year}
								onChange={(event) => {
									this.setState({
										year: event.target.value,
									});
								}}
							/>
							<label>CITY </label>

							<input
								type="text"
								value={this.state.city}
								onChange={(event) => {
									this.setState({
										city: event.target.value,
									});
								}}
							/>

              <label>Country </label>

              <input
                type="text"
                value={this.state.country}
                onChange={(event) => {
                  this.setState({
                    country: event.target.value,
                  });
                }}
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

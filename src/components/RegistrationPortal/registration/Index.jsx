import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AccountSetup from "./AccountSetup"
import CommonIndex from "../common/Index"
import Loader from "../../../screens/loader/loader"
import CreatableSelect from 'react-select/lib/Creatable';
import Select from "react-select";
import colleges from '../../../screens/register/colleges.json';
import citys from '../../../screens/register/citys.json';
import countries from '../../../screens/register/countries.json';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import "./css/stepform.css"
import EmailVerification from './EmailVerification';


const options = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chattisgarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
].map(state => ({ value: state, label: state }));
const styles = theme => ({
    root: {
        width: '90%',
    },
    // backButton: {
    //     marginRight: theme.spacing.unit,
    // },
    // instructions: {
    //     marginTop: theme.spacing.unit,
    //     marginBottom: theme.spacing.unit,
    // },
    iconContainer: {
        color: "red !important"
    },
    step: {
        color: "red !important",
        backgroundColor: "#1A4D66 !important",
    },
    active: {
        color: "red !important"
    },
    completed: {
        color: "#F39423 !important",
    },
    steproot: {
        color: "red !important"
    },
    icon: {
        //color of all icons
        color: "#153D50 !important",
        fontFamily: "Montserrat"
    },
    label: {
        color: "white !important",
        fontFamily: "Montserrat",
        fontWeight: "500"
    },
    iconactive: {
        color: "#F39423 !important",
        fontFamily: "Montserrat"
    },
    iconcomplete: {
        color: "#F39423 !important",
    },
    stepper: {
        padding: "0px !important",
    },
    connroot: {
        color: "#153D50 !important",
    }
});



function getSteps() {
    return ['ACCOUNT SETUP', 'EMAIL VERIFICATION', 'PROFILE TYPE', 'PERSONAL DETAILS'];
}
class RegisterIndex extends React.Component {
    constructor() {
        super()
        this.state = {
            activeStep: 0,
            toggleEye: false,
            toggleConfirmEye: false,
            name: "",
            email: "",
            image_url: "",
            password: "",
            confirm_password: "",
            otp: "",
            confirm_otp: "",
            email_verified: false,
            profile_type: "",
            country: "",
            phone_no: "",
            gender: "",
            enrollment_no: "",
            college: "",
            city: "",
            states: "",
            country: ""
        }
    }

    getCities = (state) => {
        let cities = citys[state];
        cities = cities.map(city => ({ value: city, label: city }))
        return cities;
    }
    handleAccountSetup = (data) => {
        this.setState({
            otp: data.otp,
            confirm_otp: data.confirm_otp,
            email_verified: data.email_verified,
            activeStep: this.state.activeStep + 1
        })
    }
    handleEmailVerification = (data) => {
        this.setState({
            name: data.name,
            email: data.email,
            password: data.password,
            confirm_password: data.confirm_password,
            otp: data.otp,
            activeStep: this.state.activeStep + 1
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.activeStep === 3) {
        }
        else if (this.state.activeStep === 0) {

        }
        else {
            console.log("else")
        }
    }


    responseFacebook = (response) => {
        this.setState({
            response
        })
    }


    responseGoogle = (response) => {
        this.setState({
            response
        })
    }

    handleNext = () => {
        document
            .getElementById("loader")
            .style
            .display = "flex";
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
        document
            .getElementById("loader")
            .style
            .display = "none";
    };

    handleBack = () => {
        document
            .getElementById("loader")
            .style
            .display = "flex";
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
        document
            .getElementById("loader")
            .style
            .display = "none";
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };


    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
    }
    onProfileChange = (e) => {
        this.setState({
            profile_type: e.target.value
        })
    }
    handleCollegeChange = (selectedOption) => {
        this.setState({ college: selectedOption });
    };
    handleStateChange = states => {
        this.setState({ states: states });
    };
    handleCityChange = (selectedOption) => {
        this.setState({ city: selectedOption });
    };

    getCountries = () => {
        return countries.map(country => ({ value: country.name, label: country.name }))
    }
    handleCountryChange = (selectedOption) => {
        this.setState({ country: selectedOption });
    };


    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep, email, image_url, profile_type, gender, enrollment_no, phone_no, college, country, city, states } = this.state;
        return (
            <div className="esummit-common-parent" >
                <CommonIndex />
                <div className="esummit-register-parent">
                    <Stepper classes={{ root: classes.stepper }} activeStep={activeStep} alternativeLabel>
                        {steps.map(label => {
                            return (
                                <Step classes={{
                                    root: classes.step,
                                }} key={label}>
                                    <StepLabel
                                        StepIconProps={{
                                            classes: {
                                                root: classes.icon,
                                                active: classes.iconactive,
                                                completed: classes.iconcomplete
                                            }
                                        }}
                                        classes={{
                                            root: classes.steproot,
                                            label: classes.label
                                        }}>
                                        {label}
                                    </StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    <div className="esummit-register-form-parent">

                        <div className="esummit-register-form-heading">
                            <div className="esummit-regsiter-form-heading-child">
                                {activeStep === 0 ? "ACCOUNT SETUP" :
                                    activeStep === 1 ? "EMAIL VERIFICATION" :
                                        activeStep === 2 ? "PROFILE TYPE" :
                                            activeStep === 3 ? "PERSONAL DETAILS" :
                                                null
                                }
                            </div>
                            <div className="esummit-regsiter-form-heading-child-second">
                                Let’s begin with setting up your account
                        </div>
                        </div>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <Loader />
                                {activeStep === 0 ?
                                    <AccountSetup
                                        handleGoogle={this.responseGoogle}
                                        handleFacebook={this.responseFacebook}
                                        handleSubmit={this.handleAccountSetup}
                                    /> : null}
                                {activeStep === 1 ?
                                    <EmailVerification
                                        email={email}
                                        otp={this.state.otp}
                                        handleSubmit={this.handleEmailVerification}
                                    />
                                    : null}
                                {activeStep === 2 ?
                                    <div>
                                        <div>
                                            You need to select one of these
                                        </div>
                                        <div>
                                            <input type="radio" name="profile_type" value="iitr_student" onChange={this.onProfileChange} /><span>IITR STUDENT</span>
                                            <input type="radio" name="profile_type" value="non_iitr_student" onChange={this.onProfileChange} /><span>NON-IITR STUDENT</span>
                                            <input type="radio" name="profile_type" value="ca" onChange={this.onProfileChange} /><span>CAMPUS AMBASSADOR</span>
                                            <input type="radio" name="profile_type" value="professional" onChange={this.onProfileChange} /><span>PROFESSIONAL</span>
                                            <input type="radio" name="profile_type" value="professor" onChange={this.onProfileChange} /><span>PROFESSOR</span>
                                            <input type="radio" name="profile_type" value="contingent" onChange={this.onProfileChange} /><span>CONTINGENT</span>
                                        </div>
                                        <div className="esummit-register-form-button">
                                            <div className="esummit-register-form-button-back" onClick={this.handleNext}>
                                                NEXT
                                            </div>
                                        </div>
                                    </div>
                                    : null}
                                {activeStep === 3 ?
                                    <div>
                                        {profile_type === "iitr_student" ?
                                            <div>
                                                <div className="esummit-register-form-input-specific">
                                                    <label htmlFor="inputPhone">PHONE NO</label>
                                                    <input
                                                        id="inputPhone"
                                                        type="number"
                                                        placeholder="Enter your phone number"
                                                        name="phone_no"
                                                        autoCorrect="off"
                                                        autoComplete="off"
                                                        autoCapitalize="off"
                                                        value={phone_no}
                                                        onChange={this.onChange}
                                                        spellCheck="false"
                                                        required
                                                    /></div>
                                                <div className="esummit-register-form-input-specific">
                                                    <label htmlFor="inputGender">Gender</label>
                                                    <select
                                                        id="inputGender"
                                                        name="gender"
                                                        value={gender}
                                                        onChange={this.onChange}
                                                        required
                                                    >
                                                        <option value="" disabled="true"> Gender </option>
                                                        <option value="male"> Male </option>
                                                        <option value="female"> Female </option>
                                                        <option value="other"> Other </option>
                                                    </select>
                                                </div>
                                                <div className="esummit-register-form-input-specific">
                                                    <label htmlFor="inputEnrollment">ENROLLMENT NO</label>
                                                    <input
                                                        id="inputEnrollment"
                                                        type="number"
                                                        placeholder="Enter your enrollment number"
                                                        name="enrollment_no"
                                                        autoCorrect="off"
                                                        autoComplete="off"
                                                        autoCapitalize="off"
                                                        value={enrollment_no}
                                                        onChange={this.onChange}
                                                        spellCheck="false"
                                                        required
                                                    /></div>
                                            </div>
                                            :
                                            <div>
                                                <div className="esummit-register-form-input-specific">
                                                    <label htmlFor="inputPhone">PHONE NO</label>
                                                    <input
                                                        id="inputPhone"
                                                        type="number"
                                                        placeholder="Enter your phone number"
                                                        name="phone_no"
                                                        autoCorrect="off"
                                                        autoComplete="off"
                                                        autoCapitalize="off"
                                                        value={phone_no}
                                                        onChange={this.onChange}
                                                        spellCheck="false"
                                                        required
                                                    /></div>
                                                <div className="esummit-register-form-input-specific">
                                                    <label htmlFor="inputGender">GENDER</label>
                                                    <select
                                                        id="inputGender"
                                                        name="gender"
                                                        value={gender}
                                                        onChange={this.onChange}
                                                        required
                                                    >
                                                        <option value="" disabled={true}> Gender </option>
                                                        <option value="male"> Male </option>
                                                        <option value="female"> Female </option>
                                                        <option value="other"> Other </option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <div className="esummit-register-form-input-specific">
                                                        <label htmlFor="inputCountry">COUNTRY</label>

                                                        <Select
                                                            value={country}
                                                            onChange={this.handleCountryChange}
                                                            options={this.getCountries()}
                                                            placeholder="Enter your country name" />
                                                    </div>


                                                    {this.state.country.value === "India"
                                                        ? <div>
                                                            <div className="esummit-register-form-input-specific">
                                                                <label htmlFor="inputState">STATE</label>

                                                                <Select value={states} // onChange={event => {} //   this.setState({} //     states: event.target.value,}}
                                                                    onChange={this.handleStateChange}
                                                                    options={options}
                                                                    placeholder="Enter your state name" />
                                                            </div>
                                                            <div className="esummit-register-form-input-specific">
                                                                <label htmlFor="inputCollege">COLLEGE</label>
                                                                <CreatableSelect
                                                                    placeholder="Enter your college name"
                                                                    searchable={true}
                                                                    required={true}
                                                                    onChange={this.handleCollegeChange}
                                                                    options={colleges[states.value]}
                                                                    clearable={false}
                                                                    value={college} />
                                                            </div>
                                                            <div className="esummit-register-form-input-specific">
                                                                <label htmlFor="inputCity">CITY</label>

                                                                <CreatableSelect
                                                                    placeholder="Enter your city"
                                                                    searchable={true}
                                                                    required={true}
                                                                    onChange={this.handleCityChange}
                                                                    options={states === ""
                                                                        ? []
                                                                        : this.getCities(states.value)}
                                                                    clearable={false}
                                                                    value={city} />
                                                            </div>
                                                        </div>
                                                        :
                                                        <div className="esummit-register-form-input-specific">
                                                            <label htmlFor="inputCollege">COLLEGE</label>
                                                            <input
                                                                type="text"
                                                                name="college"
                                                                value={college}
                                                                onChange={this.onChange}></input>
                                                        </div>
                                                    }
                                                </div>
                                            </div>}

                                        {
                                            profile_type === "non_iitr_student" ?
                                                <div>

                                                </div>
                                                :
                                                profile_type === "ca" ?
                                                    <div>

                                                    </div>
                                                    :
                                                    profile_type === "professional" ?
                                                        <div>

                                                        </div>
                                                        :
                                                        profile_type === "professor" ?
                                                            <div>

                                                            </div>
                                                            : profile_type === "contingent" ?
                                                                <div>

                                                                </div> : null
                                        }
                                    </div>
                                    : null}
                                {activeStep === 4 ?
                                    <div>
                                        <img src={image_url} />
                                    </div>
                                    : null
                                }
                                <div>
                                    <div className="esummit-register-form-button">
                                        {activeStep === 0 || activeStep === 1 ?
                                            null :
                                            <div
                                                className="esummit-register-form-button-back"
                                                onClick={this.handleBack}
                                            >BACK</div>
                                        }
                                        {activeStep === 3 ?
                                            <button type="submit">
                                                SUBMIT
                                            </button>
                                            : null}
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}


export default withStyles(styles)(RegisterIndex);

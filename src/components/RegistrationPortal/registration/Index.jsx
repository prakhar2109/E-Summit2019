import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AccountSetup from "./AccountSetup"
import CommonIndex from "../common/Index"
import Loader from "../../../screens/loader/loader"
import { Link } from "react-router-dom"
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import "./css/stepform.css"
import EmailVerification from './EmailVerification';
import ProfileType from "./ProfileType"
import PersonalDetails from './PersonalDetails';
import axios from "axios"
import sample_image from "./sample_image.jpg"
import { BASE_URL } from '../../../utils/urls';

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
        background: "#1A4D66 !important"
    },
    connroot: {
        color: "#153D50 !important",
    }
});



function getSteps() {
    return ['ACCOUNT SETUP', 'PROFILE TYPE', 'PERSONAL DETAILS'];
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
            resend_email: "",
            year: "",
            tshirt_size: "",
            programme: "",
            about_esummit: "",
            email_verified: false,
            profile_type: "",
            country: "",
            phone_no: "",
            gender: "",
            enrollment_no: "",
            college: "",
            city: "",
            states: "",
            organisation_name: "",
            industry: "",
            social_signup: false
        }
    }

    handleAccountSetup = (data) => {
        this.setState({
           
            name: data.name,
            email: data.email,
            password: data.password,
            confirm_password: data.confirm_password,
            social_signup: data.social_signup,
            activeStep: this.state.activeStep + 1
        })
    }
    handleEmailVerification = (data) => {
        this.setState({
            email: data.email,
            otp: data.otp,
            resend_email: data.resend_email,
            activeStep: this.state.activeStep + 1
        })
    }
    handleProfile = (data) => {
        this.setState({
            profile_type: data.profile_type,
            activeStep: this.state.activeStep + 1
        })
    }


    responseFacebook = (response) => {
        this.setState({
            name: response.name,
            email: response.email,
            image_url: response.image_url,
            social_signup: response.social_signup
        })
    }


    responseGoogle = (response) => {
        this.setState({
            name: response.name,
            email: response.email,
            image_url: response.image_url,
            social_signup: response.social_signup
        })
    }
    handleFullSubmit = () => {
        let {
            name,
            email,
            image_url,
            password,
            confirm_password,
            resend_email,
            year,
            tshirt_size,
            programme,
            about_esummit,
            profile_type,
            country,
            phone_no,
            gender,
            enrollment_no,
            college,
            city,
            states,
            organisation_name,
            industry, } = this.state

        if (name) name = name.trim()
        if (phone_no) phone_no = phone_no.trim()
        if (image_url) image_url = image_url.trim()
        if (email) email = email.trim()
        if (profile_type) profile_type = profile_type.trim()
        if (gender) gender = gender.trim()
        if (states) states = states.trim()
        if (college) college = college.trim()
        if (country) {
            country = country.value.trim()
        }
        if (about_esummit) about_esummit = about_esummit.trim()
        if (tshirt_size) tshirt_size = tshirt_size.trim()
        if (password) password = password.trim()
        if (confirm_password) confirm_password = confirm_password.trim()
        if (year) year = year.trim()
        if (programme) programme = programme.trim()
        if (enrollment_no) enrollment_no = enrollment_no.trim()
        if (resend_email) resend_email = resend_email.trim()
        if (industry) industry = industry.trim()
        if (organisation_name) organisation_name = organisation_name.trim()


        let data = {
            name: name,
            email: email,
            image_url: image_url,
            password: password,
            confirm_password: confirm_password,
            resend_email: resend_email,
            user_type: profile_type,
            country: country,
            phone: phone_no,
            gender: gender,
            enrollment_no: enrollment_no,
            college: college,
            city: city,
            states: states,
            organisation_name: organisation_name,
            industry: industry,
            tshirt_size: tshirt_size,
            about_esummit: about_esummit,
            year: year
        }
        document
            .getElementById("loader")
            .style
            .display = "flex";
        axios({
            method: "post",
            url: BASE_URL + "v1/api/user/signup",
            data: data
        }).then((r) => {
            var d = new Date();
            d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);

            if (r.data.token) {
                localStorage.setItem("user_token", r.data.token);
            }
            window.location.href = "/dashboard/task";
            document
                .getElementById("loader")
                .style
                .display = "none";

        }).catch((response) => {
            document
                .getElementById("loader")
                .style
                .display = "none";
            alert("Network error")
        });

    }
    handleDetails = (data) => {
        this.setState({
            data
        })
        if (!this.state.social_signup) {
            let data_details = {
                email: this.state.email,
                name: this.state.name
            }
            document
                .getElementById("loader")
                .style
                .display = "flex";
            axios({
                method: "post",
                url: BASE_URL + "v1/api/user/verification",
                data: data_details
            }).then((r) => {
                this.setState({
                    otp: r.data.one_time_pass,
                    activeStep: this.state.activeStep + 1
                })
                document
                    .getElementById("loader")
                    .style
                    .display = "none";

            }).catch((response) => {
                document
                    .getElementById("loader")
                    .style
                    .display = "none";
                alert("Network error")
            });
        }
        else {
            this.setState({
                activeStep: this.state.activeStep + 2
            })
        }
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

    handleBack = (data) => {
        if (this.state.activeStep === 2) {
            this.setState({
                phone_no: data.phone_no,
                gender: data.gender,
                enrollment_no: data.enrollment_no,
                country: data.country,
                states: data.states,
                city: data.city,
                college: data.college,
                programme: data.programme,
                year: data.year,
                about_esummit: data.about_esummit,
                tshirt_size: data.tshirt_size,
                organisation_name: data.organisation_name,
                industry: data.industry,
            })
        }
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



    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { otp, social_signup, activeStep, email, image_url, profile_type } = this.state;
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
                                    activeStep === 1 ? "PROFILE TYPE" :
                                        activeStep === 2 ? "PERSONAL DETAILS" :
                                            activeStep === 3 ? "EMAIL VERIFICATION" :
                                                activeStep === 4 ? "SUCCESSFULLY REGISTERED" : null
                                }
                            </div>
                            {activeStep !== 4 ?
                                <div className="esummit-regsiter-form-heading-child-second">
                                    Let’s begin with setting up your account
                            </div> : <div className="esummit-regsiter-form-heading-child-second">
                                    Congrats! You have successfully registered for E-Summit’19
                            </div>}
                        </div>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <Loader />
                                {activeStep === 0 ?
                                    <AccountSetup
                                        data={this.state}
                                        handleGoogle={this.responseGoogle}
                                        handleFacebook={this.responseFacebook}
                                        handleSubmit={this.handleAccountSetup}
                                    /> : null}

                                {activeStep === 1 ?
                                    <ProfileType
                                        handleProfile={this.handleProfile}
                                        handleBack={this.handleBack}
                                        profile_type={this.state.profile_type}
                                    />
                                    : null}
                                {activeStep === 2 ?
                                    <PersonalDetails
                                        handleState={this.state}
                                        handleBack={this.handleBack}
                                        profile_type={profile_type}
                                        handleDetails={this.handleDetails}
                                    />
                                    : null}
                                {activeStep === 3 ?
                                    <EmailVerification
                                        email={email}
                                        handleOTP={otp}
                                        handleSubmit={this.handleEmailVerification}
                                    />
                                    : null}
                                {activeStep === 4 ?
                                    <div className="esummit-register-form-successfull-grand-parent">
                                        <div className="esummit-register-form-successfull-parent">
                                            {!social_signup ?
                                                <div style={{
                                                    backgroundImage: `url(${sample_image})`,
                                                    backgroundPosition: "center",
                                                    backgroundSize: "cover",
                                                    width: "200px",
                                                    height: "200px",
                                                    borderRadius: "2px",
                                                    padding: "20px"
                                                }}></div>
                                                :
                                                <div style={{
                                                    backgroundImage: `url(${image_url})`,
                                                    backgroundPosition: "center",
                                                    backgroundSize: "cover",
                                                    width: "200px",
                                                    height: "200px",
                                                    borderRadius: "2px",
                                                    padding: "20px"
                                                }}></div>
                                            }

                                        </div>
                                        <div className="esummit-register-form-go-to-name">
                                            {this.state.name}
                                        </div>
                                        <div className="esummit-register-form-button">
                                            <div className="esummit-register-form-button-back" onClick={this.handleFullSubmit}>GO TO DASHBOARD</div>
                                        </div>
                                    </div>
                                    : null
                                }
                            </form>
                        </div>
                    </div>
                </div >
                <div className="esummit-register-form-footer">
                    <span>Already have an account?</span>
                    <span><Link to="/registration_portal/login">Log in</Link></span>
                </div>
            </div >
        );
    }
}


export default withStyles(styles)(RegisterIndex);

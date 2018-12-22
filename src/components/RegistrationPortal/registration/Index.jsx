import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AccountSetup from "./AccountSetup"
import CommonIndex from "../common/Index"
import Loader from "../../../screens/loader/loader"
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import "./css/stepform.css"
import EmailVerification from './EmailVerification';
import ProfileType from "./ProfileType"
import PersonalDetails from './PersonalDetails';


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
        background:"#1A4D66 !important"
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
            resend_email: "",
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
                                    <ProfileType
                                        handleProfile={this.handleProfile}
                                        profile_type={this.state.profile_type}
                                    />
                                    : null}
                                {activeStep === 3 ?
                                    <PersonalDetails profile_type={profile_type} />
                                    : null}
                                {activeStep === 4 ?
                                    <div>
                                        <img src={image_url} />
                                    </div>
                                    : null
                                }
                                <div>
                                    <div className="esummit-register-form-button">
                                        {activeStep === 0 || activeStep === 2 ?
                                            null :
                                            <div
                                                className="esummit-register-form-button-back"
                                                onClick={this.handleBack}
                                            >BACK</div>
                                        }
                                        {/* {activeStep === 3 ?
                                            <button type="submit">
                                                SUBMIT
                                            </button>
                                            : null} */}
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

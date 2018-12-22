import React, { Component } from 'react';
import axios from "axios"
import correct from "./svg/correct.svg"
import wrong from "./svg/wrong.svg"

export default class EmailVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirm_otp: "",
            email: this.props.email,
            otp: this.props.email,
            otp_error: "",
            otp_error_bool: "",
            email_verified: false,
            resend_email: "",
            resend_otp: false,
            email_error: "",
            email_error_bool: "",
            confirmation_otp_message: ""
        }
    }
    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
    }
    handleResendOTP = () => {
        let data = {
            email: this.state.resend_email
        }
        document
            .getElementById("loader")
            .style
            .display = "flex";
        axios({
            method: "post",
            url: "http://localhost:8000/edc/email",
            data: data
        }).then((r) => {
            this.setState({
                otp: r.data.one_time_pass,
                confirmation_otp_message: "OTP is successfully send.",
                resend_otp: false,
                confirm_otp: ""
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

        });
    }
    handleVerify = () => {
        if (parseInt(this.state.confirm_otp) === this.state.otp) {
            this.setState({
                email_verified: true
            })
            let { otp, confirm_otp, email_verified, resend_email } = this.state
            let data = {
                otp: otp,
                confirm_otp: confirm_otp,
                email_verified: email_verified,
                resend_email: resend_email
            }
            this.props.handleSubmit(data)
        }
        else {
            this.setState({
                otp_error_bool: "true",
                otp_error: "Wrong OTP"
            })
        }
    }
    emailvalidate = () => {
        setTimeout(function () {
            var re = /\S+@\S+\.\S+/
            if (!this.state.resend_email.match(re)) {
                this.setState({
                    email_error_bool: "true",
                    email_error: "Email is not valid"
                })

            } else {
                this.setState({
                    email_error_bool: "false",
                    email_error: ""
                })
            }
        }.bind(this), 1000)
    }
    handleResend = () => {
        this.setState({
            resend_otp: true
        })
    }
    componentDidMount() {
        this.setState({
            email: this.props.email,
            otp: this.props.otp
        })
    }
    render() {
        const { confirm_otp, otp_error, otp_error_bool, resend_otp, resend_email, email_error, email_error_bool, confirmation_otp_message } = this.state
        return (
            <div className="esummit-register-form-body-parent">
                <div>
                    {confirmation_otp_message}
                </div>
                {resend_otp ? null :
                    <div>
                        <div className="esummit-register-form-input-specific">
                            <label htmlFor="inputOTP">Enter OTP</label>
                            <div className="esummit-register-form-input-specific-inner">
                                <input
                                    id="inputOTP"
                                    type="number"
                                    className={otp_error === "" ? null : "esummit-register-form-field-error-text"}
                                    name="confirm_otp"
                                    autoCorrect="off"
                                    autoComplete="off"
                                    autoCapitalize="off"
                                    value={confirm_otp}
                                    maxLength={4}
                                    minLength={4}
                                    onChange={event => {
                                        this.onChange(event)
                                    }}
                                    spellCheck="false"
                                    required
                                />
                                <span className="esummit-register-form-field-error-svg">
                                    {otp_error_bool === "" ? null :
                                        <img src={otp_error_bool === "true" ? wrong : otp_error_bool === "false" ? correct : null} />
                                    }
                                </span>
                            </div>
                            <div className="esummit-register-form-field-error">{otp_error}</div>
                        </div>
                        <div onClick={this.handleResend}>Resend OTP</div>
                    </div>
                }
                {resend_otp ?
                    <div className="esummit-register-form-input-specific">
                        <label htmlFor="inputEmail">CONFIRMATION E-MAIL ID</label>
                        <div className="esummit-register-form-input-specific-inner">
                            <input
                                id="inputResendEmail"
                                type="email"
                                className={email_error === "" ? null : "esummit-register-form-field-error-text"}
                                placeholder="Re-enter your mail ID for confirmation email"
                                name="resend_email"
                                autoCorrect="off"
                                autoComplete="off"
                                autoCapitalize="off"
                                value={resend_email}
                                onChange={event => {
                                    this.onChange(event)
                                    {
                                        this.emailvalidate()
                                    }
                                }}
                                spellCheck="false"
                                required
                            />
                            <span className="esummit-register-form-field-error-svg">
                                {email_error_bool === "" ? null :
                                    <img src={email_error_bool === "true" ? wrong : email_error_bool === "false" ? correct : null} />
                                }
                            </span>
                        </div>
                        <div className="esummit-register-form-field-error">{email_error}</div>
                    </div>
                    : null}
                <div className="esummit-register-form-button">
                    {resend_otp ?
                        <div className="esummit-register-form-button-back" onClick={this.handleResendOTP}>
                            RESEND
                        </div>
                        :
                        <div className="esummit-register-form-button-back" onClick={this.handleVerify}>
                            VERIFY
                        </div>
                    }
                </div>
            </div>
        );
    }
}

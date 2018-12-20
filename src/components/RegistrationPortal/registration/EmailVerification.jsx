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
            email_verified: false
        }
    }
    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
    }
    handleResendOTP = () => {
        this.setState({
            confirm_otp: ""
        })
        let data = {
            email: this.state.email
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
                otp: r.data.one_time_pass
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
        console.log(this.state.otp, this.state.confirm_otp, "inside")
        if (parseInt(this.state.confirm_otp) === this.state.otp) {
            this.setState({
                email_verified: true
            })
            let { otp, confirm_otp, email_verified } = this.state
            let data = {
                otp: otp,
                confirm_otp: confirm_otp,
                email_verified: email_verified
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
    componentDidMount() {
        this.setState({
            email: this.props.email,
            otp: this.props.otp
        })
    }
    render() {
        const { confirm_otp, otp_error, otp_error_bool } = this.state
        return (
            <div className="esummit-register-form-body-parent">
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
                            maxLength="4"
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
                    <div onClick={this.handleResendOTP}>Resend OTP</div>
                </div>
                <div className="esummit-register-form-button">
                    <div className="esummit-register-form-button-back" onClick={this.handleVerify}>
                        VERIFY
                    </div>
                </div>
            </div>
        );
    }
}

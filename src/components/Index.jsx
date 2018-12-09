import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

export default class LoginIndex extends Component {
    constructor(props) {

        super(props);
        this.state = {
            fbres: false
        }
    }

    responseFacebook = (response) => {
        console.log(response);
        this.setState({
            fbres: true
        })

    }

    responseGoogle = (response) => {
        console.log(response);
    }

    render() {
        return (
            <div>

                <FacebookLogin
                    appId="344837089639906"
                    autoLoad={true}
                    fields="name,email,picture"
                    textButton="Signin with Facebook"
                    size="medium"
                    callback={this.responseFacebook}
                />


                < GoogleLogin
                    clientId="210798785897-bj54gjooglbsl1rrln9sdoplulbglt0d.apps.googleusercontent.com"
                    buttonText="Signin with Google"
                    autoLoad={true}
                    icon={true}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />
            </div>
        );
    }
}


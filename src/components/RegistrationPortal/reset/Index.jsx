import React, { Component } from 'react';
import Loadable from "react-loadable";
import Loader from "../../../screens/loader/loader";
import { Route } from "react-router-dom";

const FindAccount = Loadable({
    loader: () => import("../FindAccount/Index"),
    loading: () => <Loader />,
});
const ResetPasswordField = Loadable({
    loader: () => import("../resetPassword/Index"),
    loading: () => <Loader />,
});


export default class ResetIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <Route exact path="/resetPassword" component={FindAccount} />
                <Route exact path="/resetPassword/:para" component={ResetPasswordField} />
            </React.Fragment>
        );
    }
}

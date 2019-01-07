import React, { Component } from 'react';
import "./style.css"
import { BASE_URL } from "../../../utils/urls"
import "../Common/ideastorm.scss"
import "../Common/ignite.scss"

export default class HeaderSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            desktop: true
        }
    }
    componentDidMount() {
        this.setState({
            data: this.props.data[0]
        })
        if (window.innerWidth <= 768) {
            this.setState({ desktop: false });
        }
    }
    render() {
        return (
            <div className="idea" style={{
                backgroundImage: `url(${this.state.desktop ? BASE_URL + this.state.data.background_image_pc : BASE_URL + this.state.data.background_image_mobile})`
            }}>
                <p className="header_idea">
                    {this.state.data.heading}
                </p>
                <p>{this.state.data.subheading}</p>

                <br />
                <br />
                <br />
                <p>CASH PRIZE WORTH INR {this.state.data.prizes}</p>
                <p>
                    {this.state.data.description}
                </p>

                <div className="ignite-first-page-scroll">
                    <div onClick={this.timeline} className='icon-scroll'></div> <br />

                    <div id="ignite-first-page-scroll-child"> <p> SCROLL DOWN</p></div>
                </div>
                <center>

                </center>

            </div>
        );
    }
}


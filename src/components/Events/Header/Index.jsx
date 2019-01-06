import React, { Component } from 'react';

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
            data: this.props.data
        })
        if (window.innerWidth <= 768) {
            this.setState({ desktop: false });
        }
    }
    render() {
        return (
            <div className="esummit-events-header-section-parent"
                style={{
                    backgroundImage: `url(${this.state.desktop ? this.state.data.background_image : this.state.data.background_image_mobile})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="esummit-events-header-section-body">
                    <div className="esummit-events-header-section-body-heading">
                        {this.state.data.heading}
                    </div>
                    <div className="esummit-events-header-section-body-subheading">
                        {this.state.data.subheading}
                    </div>
                    <div className="esummit-events-header-section-body-prizes">
                        {this.state.data.prizes}
                    </div>
                    <div className="esummit-events-header-section-body-description">
                        <p>{this.state.data.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}


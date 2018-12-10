import React, {Component} from 'react';
import Slider from "react-slick";
import Header from '../../components/header';

class Events extends Component {
    state = {
        speakers: [
            {
                id: 1,
                name: "Rohit Jha",
                designation: "Founder "
            }, {
                id: 2,
                name: "Rohit Jha",
                designation: "Founder "
            }, {
                id: 3,
                name: "Rohit Jha",
                designation: "Founder "
            }, {
                id: 4,
                name: "Rohit Jha",
                designation: "Founder "
            }, {
                id: 5,
                name: "Rohit Jha",
                designation: "Founder "
            }
        ]
    }
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        }
        return (
            <section id="events">

                <div className="land_events">
                    <Header title="EVENTS"/>
                    <p className="text">
                        Expert investor or an emerging entrepreneur or a quiz master, you think you know
                        it all ? Put that test to claim, battle it out in the field for the ultimate
                        glory.
                    </p>

                </div>
                <div className="land_events_array">

                    <div className="conclave">
                        <center>

                            <p>CONCLAVE</p>
                            <p>Tagline for the event or minimal discription of event.</p>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                            <p>VIEW MORE</p>

                        </center>
                    </div>

                    <div className="workshop">
                        <center>

                            <p>CONCLAVE</p>
                            <p>Tagline for the event or minimal discription of event.</p>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                            <p>VIEW MORE</p>

                        </center>
                    </div>
                    <div className="leadership">
                        <center>

                            <p>CONCLAVE</p>
                            <p>Tagline for the event or minimal discription of event.</p>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                            <p>VIEW MORE</p>

                        </center>
                    </div>
                    <div className="competition">
                        <center>

                            <p>CONCLAVE</p>
                            <p>Tagline for the event or minimal discription of event.</p>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                            <p>VIEW MORE</p>

                        </center>
                    </div>

                </div>
                <div className="land_events">
                    <center>
                        <button className="all_events_button">VIEW ALL EVENTS</button>
                    </center>
                    <Header title="SPEAKERS"/>
                    <p className="text">Meet the awesome companies who make this all possible.</p>
                    <div className="speaker_slidder">
                        <Slider {...settings}>

                            {this
                                .state
                                .speakers
                                .map((update) => {

                                    return (
                                        <div key={update.id}>
                                            <div className="img_holder"></div>

                                            <p className="name">{update.name}</p>
                                            <p className="designation">{update.designation}
                                            </p>

                                        </div>
                                    );
                                })}

                        </Slider>

                    </div>
                    <center>
                        <button className="all_events_button">VIEW ALL SPEAKERS</button>
                    </center>
                    <Header title="SPONSORS"/>
                    <p className="text">
                        Meet the awesome companies who make this all possible.
                    </p>

                    <div className="speaker_slidder">
                        <Slider {...settings}>

                            {this
                                .state
                                .speakers
                                .map((update) => {

                                    return (
                                        <div key ={update.id}>
                                            <div className="img_holder"></div>
                                            <p className="name">{update.name}</p>
                                            <p className="designation">
                                                {update.designation
}
                                            </p>

                                        </div>
                                    );
                                })
}
                        </Slider>

                    </div>
                    <center>
                        <button className="all_sponsors">VIEW ALL SPONSORS</button>
                    </center>
                </div>

            </section>

        );
    }
}

export default Events;
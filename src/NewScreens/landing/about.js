import React, { Component } from 'react';
import Header from '../../components/header';

class About extends Component {
    render() {
        return (
            <section id="about">
            <div className="land_screen2">
                <Header title="WHAT IS E-SUMMIT?"/>
                <p>eSummit being the flagship event of ECell, is held annually brings together
                    the academic community, venture capitalists, new age entrepreneurs and all those
                    passionate about entrepreneurship to common grounds. It provides an avenue to
                    exhibit the entrepreneurial talent and creativity through many events like
                    business ventures, product design competition, and social entrepreneurial idea
                    competition.</p>
                <Header title="E-SUMMIT’19  BUILDING FOR BILLION"/>    
                <p>Several business ventures work out and end up as successes and unfortunately,
                    a lot more of them don’t. But all of them share a common denominator, they
                    started out as an IDEA. It doesn’t matter where you get it, under the shower, on
                    an evening walk or at the coffee table. Some are good, some bad, and some might
                    be brilliant. But they are just that – ideas. It’s crucial to give it a chance.
                    Your mind is for having ideas, not holding on to them. The whole prospect of
                    “realizing an idea” sure might seem daunting. But you can either man up and do
                    your best to turn it into reality or you can chicken out and leave the idea be
                    just that – an idea.</p>
            </div>
        </section>
        );
    }
}

export default About;
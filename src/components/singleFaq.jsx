import React, {Component} from 'react';
import "./css/faq_unit.scss";
import Plus from "./static/plus.svg";
import  cross from "./static/cross.svg";
class SingleFAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 1
        };
    }
    toggle = (e, id) => {
        if (this.state.show === 1) {
            document
                .getElementById(id)
                .style
                .display = 'block';

            var qid = 'q' + id;
            var pid = 'p' + id;
            var cid = 'c' + id;
            document
                .getElementById(qid)
                .style
                .background = '#F7F8F9';
            document
                .getElementById(pid)
                .style.display ="none";

                document
                .getElementById(cid)
                .style.display ="inline-block";

            this.setState({show: 0});
        } else {
            document
                .getElementById(id)
                .style
                .display = 'none';
            qid = 'q' + id;
            cid = 'c' + id;
            pid = 'p' + id;
            document
                .getElementById(qid)
                .style
                .background = 'white';
    

            document
                .getElementById(pid)
                .style.display ="inline-block";

             document
                .getElementById(cid)
                .style.display ="none";

            this.setState({show: 1});
        }
    };
    render() {
        let { update } = this.props;
        return (
            <div
                onClick={(e) => this.toggle(e, update.id)}
                key={update.id}
                className="faq_unit">
                <div className="question" id={'q' + update.id}>
                    {update.question}
                    <img className = "plus" src = {Plus}  id={'p' + update.id} /> 
                    <img className = "crox" src = {cross}  id={'c' + update.id} /> 
                </div>
                <div className="answer" id={update.id}>
                    {update.answer}
                </div>
            </div>
        );
    }
}

export default SingleFAQ;
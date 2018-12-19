import React, { Component } from "react";
import SingleFAQ from "./../../components/singleFaq";
import Header from "../../components/header";
import {Element} from "react-scroll";
class FAQBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 1,
    };
  }
  toggle = (e, id) => {
    if (this.state.show === 1) {
      document.getElementById(id).style.display = "block";

      var qid = "q" + id;
      var iid = "i" + id;
      document.getElementById(qid).style.background = "#F7F8F9";
      document.getElementById(iid).classList.add("fa-times-circle");

      this.setState({ show: 0 });
    } else {
      document.getElementById(id).style.display = "none";
      qid = "q" + id;
      iid = "i" + id;
      document.getElementById(qid).style.background = "white";
      document.getElementById(iid).classList.remove("fa-times-circle");
      this.setState({ show: 1 });
    }
  };
  render() {
    console.log(this.props.faqList);
    return (
      <Element id = "faq" name ="faq">
        <section id="faq">
          <div className="land_faq">
            <Header title="FAQs" />
            <p>Stuck somewhere ? We’ re here to help you! </p>
            {this.props.faqList.map(update => {
              return <SingleFAQ key = {update.id}update={update} />;
            })}

            <center>
              <button className="view_all"> VIEW ALL </button>{" "}
            </center>
          </div>
        </section>
      </Element>
    );
  }
}

export default FAQBoard;

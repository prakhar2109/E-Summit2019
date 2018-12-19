import React, { Component } from "react";
import Nav from "./../landing/nav/nav.jsx";
import Header from "../../components/header";
import { Tabs } from "antd";
import "./faq.scss";
import 'antd/dist/antd.css';

const TabPane = Tabs.TabPane;

export default class FAQPage extends Component {
  state = {
    faqList: [
      {
        id: 1,
        question: "How to  reach IIT Roorkee ?",
        answer:
          "eSummit being the flagship event of ECell, is held annually brings together the " +
          "academic community, venture capitalists, new age entrepreneurs and all those pas" +
          "sionate about entrepreneurship to common grounds. It provides an avenue to exhib" +
          "it the entrepreneurial talent and creativity through many events like business v" +
          "entures, product design competition, and social entrepreneurial idea competition" +
          ".",
      },
      {
        id: 2,
        question: "Questions",
        answer: "answer",
      },
    ],
  };
  render() {
    console.log("faqList", this.state.faqList);
    return (
      <React.Fragment>
 
        <div className="faq">
          <Header title="FAQs" />
          <p className="text">Stuck somewhere? We’re here to help you!</p>

          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1" >
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>

        <div className="cannot_find">
          <p>Can’t find what you’re looking for ?</p>
          <p>
            E-Mail your query to esummit18@gmail.com or Get in touch with us
          </p>
        </div>
      </React.Fragment>
    );
  }
}

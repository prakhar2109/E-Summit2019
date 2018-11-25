import React, { Component } from 'react'
import './hamburger.css'
import $ from 'jquery';
export default class Hamburger extends Component {



    render() {
        $(document).ready(function () {

            $(".cross").hide();
            $(".menu").hide();
            $(".hamburger").click(function () {
                $(".menu").slideToggle("slow", function () {
                    $(".hamburger").hide();
                    $(".cross").show();
                });
            });

            $(".cross").click(function () {
                $(".menu").slideToggle("slow", function () {
                    $(".cross").hide();
                    $(".hamburger").show();
                });
            });

        });
        return (
            <div>
                <div className="hamburger-header">
                    
                    <button className="hamburger">&#9776;</button>
                    <button className="cross">&#735;</button>
                </div>

                <div className="menu">
                    <ul>
                        <a href="#"><li>LINK ONE</li></a>
                        <a href="#"><li>LINK TWO</li></a>
                        <a href="#"><li>LINK THREE</li></a>
                        <a href="#"><li>LINK FOUR</li></a>
                        <a href="#"><li>LINK FIVE</li></a>
                    </ul>
                </div>
            </div>
        )
    }
}



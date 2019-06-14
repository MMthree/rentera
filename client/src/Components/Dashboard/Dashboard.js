import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import LeasesSummaryCard from "../LeasesSummary/LeasesSummary";
import TicketsSummaryCard from "../TicketsSummary/TicketsSummary";
import PropertiesSummaryCard from "../PropertiesSummary/PropertiesSummary";
import PaymentsSummaryCard from "../PaymentsSummary/PaymentsSummary";
import ViewAnnouncementsDash from "../ViewAnnouncementsDash/ViewAnnouncementsDash";
import axios from "axios";

// import { Row, Col, Card, Popup, Button } from "react-bootstrap";

import "./Dashboard.css";


class Dashboard extends Component {
    state = {
        temp: "",
        tempIcon: "",
        tempDesc: ""
    };

    pickWeatherIcon (data) {

        if (data === "01d") {
            this.setState({ tempIcon: "fas fa-sun"})
        }
        if (data === "01n") {
            this.setState({ tempIcon: "fas fa-moon"})
        }
        if (data === "02d") {
            this.setState({ tempIcon: "fas fa-cloud-sun"})
        }
        if (data === "02n") {
            this.setState({ tempIcon: "fas fa-cloud-moon"})
        }
        if (data === "03d" || data === "03n") {
            this.setState({ tempIcon: "fas fa-cloud"})
        }
        if (data === "04d" || data === "04n") {
            this.setState({ tempIcon: "fas fa-cloud-meatball"})
        }
        if (data === "09d" || data === "09n") {
            this.setState({ tempIcon: "fas fa-cloud-showers-heavy"})
        }
        if (data === "10d") {
            this.setState({ tempIcon: "fas fa-cloud-sun-rain"})
        }
        if (data === "10n") {
            this.setState({ tempIcon: "fas fa-cloud-moon-rain"})
        }
        if (data === "11d" || data === "11n") {
            this.setState({ tempIcon: "fas fa-bolt"})
        }
        if (data === "13d" || data === "13n") {
            this.setState({ tempIcon: "fas fa-snowflake"})
        }
        if (data === "50d" || data === "50n") {
            this.setState({ tempIcon: "fas fa-smog"})
        }
    };

    componentDidMount() {
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=irvine,us&units=imperial&appid=166a433c57516f51dfab1f7edaed8413")
            .then(res => {
                this.pickWeatherIcon(res.data.weather[0].icon)
                this.setState({
                    temp: Math.round(res.data.main.temp),
                    tempDesc: res.data.weather[0].description 
                })
                // console.log(this.state)
            });
    };
    

    render() {
        return (

            <div className="background">
                <div className="header">  


                        <div className="jumbotron" >
                            <div className="row mb-2">
                                <div className="col-6">
                                    <h4 className="text-left">Hi, {this.props.state.userEmail}</h4>
                                </div>
                                <div className="col-6">
                                    <h4 className="text-right"><i className="message fas fa-comment-alt"></i> <i className="fas fa-user-circle"></i></h4>
                                    <div className="notification">
                                        <p className="text-center notification_amount">2</p>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <p className="lead text-center">Vantage Apartments</p>
                            <h1 className="text-center"><i className={this.state.tempIcon}></i> {this.state.temp}&#176;</h1>
                            <p  className="text-center capitalize">{this.state.tempDesc}</p>
                            <hr className="my-4"/>
                            <div className="row my-2"> 
                            <div className="col-md-5 mx-auto announcement">
                                <div className="row">
                                    <div className="col-10 my-2">
                                        <h5 className="my-1" style={{fontSize: "16px"}}>You have a package!</h5>
                                    </div>
                                    <div className="col-2 my-2">
                                    <i className="fas fa-times-circle"></i>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-5 mx-auto announcement">
                                <div className="row">
                                    <div className="col-10 my-2">
                                        <h5 className="my-1" style={{fontSize: "16px"}}>Management: Street closure...</h5>
                                    </div>
                                    <div className="col-2 my-2">
                                    <i className="fas fa-times-circle"></i>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                
                </div>   

                <div className="body_cards">
                    <section className="section-tours" id="section-tours">
                            <div className="u-center-text u-margin-bottom-big">
                                    <h2 className="heading-secondary">
                                        Control Panel
                                    </h2>
                                </div>

                        

                            {/* Cards Start Here */}
                                <div className="row firstrow">
                                    {/* Payment Summary Card */}
                                    <div className="col-md-4 mx-auto">
                                        <div className="card">
                                            <div className="card__side card__side--front card__side--front-1">
                                            <div className="card__picture card__picture--1">
                                                
                                            </div>
                                            <h4 className="card__heading card__heading--1">
                                                <span className="card__heading-span card__heading-span--1">Payment Summary</span>
                                            </h4>
                                            <div className="card__details card__details--1">
                                                <ul>
                                                    <li>Pay Bills</li>
                                                    <li>View your Bills</li>
                                                </ul>
                                            </div>
                                            </div>
                                            <div className="card__side card__side--back card__side--back-1">
                                                <div className="card__cta">
                                                    <div className="card__info-box">
                                                        <p className="card__info-view">Click</p>
                                                        <p className="card__info-below">Below</p>
                                                    </div>
                                                <a href="/managePayments" className="btn btn-lg">Payments</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tickets Summary Card */}
                                    <div className="col-md-4 mx-auto">
                                        <div className="card">
                                        <div className="card__side card__side--front card__side--front-2">
                                        <div className="card__picture card__picture--2">

                                            </div>
                                            <h4 className="card__heading card__heading--2">
                                                <span className="card__heading-span card__heading-span--1">Tickets Summary</span>
                                            </h4>
                                            <div className="card__details card__details--2">
                                                <ul>
                                                    <li>View Tickets</li>
                                                    <li>Create a Ticket</li>
                                                </ul>
                                            </div>
                                            </div>
                                            <div className="card__side card__side--back card__side--back-2">
                                                <div className="card__cta">
                                                    <div className="card__info-box">
                                                        <p className="card__info-view">Click</p>
                                                        <p className="card__info-below">Below</p>
                                                </div>
                                                <a href="manageTickets" className="btn btn-lg">Tickets</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                                
                            <div className="row secondrow">
                                    {/* Properties Summary Card */}
                                <div className="col-md-4 mx-auto">
                                    <div className="card">
                                        <div className="card__side card__side--front card__side--front-3">
                                            <div className="card__picture card__picture--3">

                                            </div>
                                            <h4 className="card__heading card__heading--3">
                                                <span className="card__heading-span card__heading-span--1">Properties Summary</span>
                                            </h4>
                                            <div className="card__details card__details--3">
                                                <ul>
                                                    <li>View Properties</li>
                                                    <li>Add Properties</li>
                                                </ul>
                                            </div>
                                            </div>
                                        <div className="card__side card__side--back card__side--back-3">
                                                <div className="card__cta">
                                                    <div className="card__info-box">
                                                        <p className="card__info-view">Click</p>
                                                        <p className="card__info-below">Below</p>
                                                    </div>
                                                    <a href="/manageProperties" className="btn btn-lg">Properties</a>
                                                </div>
                                        </div>
                                    </div>
                                </div> 

                                    {/* Leases Summary Card */}
                                    <div className="col-md-4 mx-auto">
                                        <div className="card">
                                        <div className="card__side card__side--front card__side--front-4">
                                        <div className="card__picture card__picture--4">
                                            
                                            </div>
                                            <h4 className="card__heading card__heading--4">
                                                <span className="card__heading-span card__heading-span--1">Lease Summary</span>
                                            </h4>
                                            <div className="card__details card__details--4">
                                                <ul>
                                                    <li>View your Lease</li>
                                                    <li>Add a Lease</li>
                                                </ul>
                                            </div>
                                            </div>
                                        <div className="card__side card__side--back card__side--back-4">
                                                <div className="card__cta">
                                                    <div className="card__info-box">
                                                        <p className="card__info-view">Click</p>
                                                        <p className="card__info-below">Below</p>
                                                    </div>
                                                    <a href="/manageLeases" className="btn btn-lg">Leases</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section>  
                    </div>  
            </div>

            );

        }


    }

export default Dashboard;
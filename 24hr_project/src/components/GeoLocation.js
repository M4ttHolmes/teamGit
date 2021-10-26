
import React, { Component } from "react";
import OpenWeather from "./OpenWeather";
import Nasa from "./NASA/Nasa";
import Ticketmaster from "./Ticketmaster"

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 39.8080107,
            long: -86.3114994,
        };
    }
    

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                console.log(position);
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                })
            
            },
            function(error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
    }
  
    render() {
      return (
        <div>
            <Nasa lat={this.state.lat} long={this.state.long}/>
            <OpenWeather lat = {this.state.lat} long = {this.state.long} />
            <Ticketmaster lat={this.state.lat} long={this.state.long} />

        </div>
      );
    }
  }

  export default Location;

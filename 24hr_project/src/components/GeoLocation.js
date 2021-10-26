import React, { Component } from "react";
import OpenWeather from "./OpenWeather";


class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            long: 0,
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
          <h1>Your Current Location:</h1>
          <h4>Latitude: {this.state.lat}</h4>
          <h4>Longitude: {this.state.long}</h4>
        <OpenWeather lat = {this.state.lat} long = {this.state.long} />
        </div>
      );
    }
  }

  export default Location;

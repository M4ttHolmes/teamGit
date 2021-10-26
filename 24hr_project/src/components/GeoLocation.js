import React from "react";
import Nasa from "./NASA/nasa";


class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 39,
            long: -86,
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
            <Nasa lat={this.state.lat} long={this.state.long}/>
        </div>
      );
    }
  }

  export default Location;

import React from "react";
import OpenWeather from "./OpenWeather";
import Nasa from "./NASA/Nasa";
import Ticketmaster from "./Ticketmaster"
import Radium from "radium";

const styles = {

    body: {
        background: "linear-gradient(0deg, rgba(242,226,177,1) 0%, rgba(215,246,241,1) 100%)",
        color: "darkblue",
        textAlign: "Center",
        position: "relative",
        width: "100vw",
        height: "100%",
        top: "0px" ,
        paddingTop: "50px",
    }

}


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
        <div style={styles.body}>
            <OpenWeather lat = {this.state.lat} long = {this.state.long} />
            <Nasa lat={this.state.lat} long={this.state.long}/>
            <Ticketmaster lat={this.state.lat} long={this.state.long} />

        </div>
      );
    }
  }

  export default Radium(Location);

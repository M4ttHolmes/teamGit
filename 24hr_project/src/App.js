import React, { Component } from "react";
import Ticketmaster from "./components/Ticketmaster";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  render() {
    return (
      <div>
        <Ticketmaster />
      </div>
    );
  }
}

export default App
import { Component } from "react";

function FindLocation() {
    if (navigator.geolocation) {
        console.log("GeoLocation is Available!");
    } else {
      console.log("Sorry Not available!");
    }}

    FindLocation();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  FindLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
    );
  }
}

export default FindLocation;

// render(<App />, document.getElementById("root"));
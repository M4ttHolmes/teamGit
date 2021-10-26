import React, { Component } from "react";
import Location from './GeoLocation';


class OpenWeather extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            url: 'api.openweathermap.org/data/2.5/weather?',
            key: '11f6fcccb806a30c1309f366cd24725b',
            lat: '',
            long: ''
        }
    }


componentDidMount = () => {
    console.log("OpenWeather")
    fetch(`${this.state.url}lat=${this.props.lat}&lon=${this.props.long}&appid=${this.state.key}`)
    
    .then(response => console.log(response))
    //response.json())

    //.then(json => {
        //console.log(response)
    .catch(err => console.log(err))
    //})
   
};

render() {
    return (
        <div>

        </div>
    )
      
    
}
}


export default OpenWeather;
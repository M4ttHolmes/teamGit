import React, { Component } from "react";
import Location from './GeoLocation';


class OpenWeather extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            url: 'https://api.openweathermap.org/data/2.5/weather?',
            key: '11f6fcccb806a30c1309f366cd24725b',
            lat: '',
            long: '',
            temp: 0
        }
    }


componentDidMount = () => {
    console.log("OpenWeather")
    fetch(`${this.state.url}lat=${this.props.lat}&lon=${this.props.long}&units=imperial&appid=${this.state.key}`)
    
    .then(response => response.json())
    .then(json => console.log(json))
    .then(json => this.setState({
        temp: json.main.temp
    }))
    .catch(err => console.log(err))
        
    
};


render() {
    return (
        <div>

        </div>
    )
      
    
}
}


export default OpenWeather;
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
            temp: 0,
            error: null,
            isLoaded: false,
            posts: []
        }
    }


    componentDidMount = () => {
        console.log("OpenWeather")
        fetch(`${this.state.url}lat=${this.props.lat}&lon=${this.props.long}&appid=${this.state.key}&units=imperial`)
        
        .then(response => response.json())
        .then(json => this.setState({
            temp: json.main.temp
        }))
        .catch(err => console.log(err))
        
    };


    render() {
        return (
            <div>
                <h2>Current Temp: {this.state.temp}</h2>
            </div>
        )
    }
}


export default OpenWeather;
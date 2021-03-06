import React from "react";
import Radium from "radium";

const styles = {
    border: {
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: "100px",
        width: "40%",
        border: "2px solid darkblue",
        borderRadius: "12px"
      
    },
    button: {
        backgroundColor: "lightgrey",
        borderColor: 'lightgrey',
        color: 'darkblue',
        borderRadius: '5px',
        height: '4em',
        width: '10em',
        marginBottom: "50px"
    }
}

class OpenWeather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: 'https://api.openweathermap.org/data/2.5/weather?',
            key: '11f6fcccb806a30c1309f366cd24725b',
            lat: '',
            long: '',
            temp: 0,
            weather: [],
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
            temp: json.main.temp,
            weather: json.weather[0].description
        }))
        .catch(err => console.log(err))
        
    };
    // /tempChange = () => {
    //     const temperatureFahrenheit = main.temp
    //     const temperatureCelcius = (temperatureFahrenheit - 32) * (5 / 9)
    //     if (temperatureFahrenheit) {
    //     }
    // }

    render() {
        return (
            <div style={styles.border}>
                <h1>Current Temperature:</h1>
                <h2>{this.state.temp}°</h2>
                <h2>{this.state.weather}</h2>
    
                <button style={styles.button}>
                    Convert
                </button>
            </div>
        )
    }
}


export default Radium(OpenWeather);
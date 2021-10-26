import React from 'react'
import Radium from "radium";

const styles = {
    border: {
        margin: "auto",
        width: "40%",
        border: "2px solid darkblue",
        marginBottom: "100px"
    },

    li: {
        listStyleType: "none",
        padding: "20px"
    },

}

class Ticketmaster extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            url: 'https://app.ticketmaster.com/discovery/v2/events?',
            key: 'VHKhYGXoMxd7mJA0QBaAJoYBeZZrjLEa',
            lat: '',
            long: '',
            events: []
        }
    }
  
componentDidMount = () => {
    console.log("Ticketmaster")
    fetch(`${this.state.url}apikey=${this.state.key}&latlong=${this.props.lat},${this.props.long}`)
    
    .then(response => response.json())
    .then(json => {this.setState({
        events: json._embedded.events})
        console.log(this.state.events);
    })
    .catch(err => console.log(err))
};

render() {
    return (
        <div style={styles.border} className='main'>
            <h1>Popular Events in the Area: </h1>
            <ul id='event-name'>
            {this.state.events.map((event, key) => {
                    return(
                        <li style={styles.li} key={key}><strong>{event.name}</strong> on {event.dates.start.localDate}</li>

                    )
                })}
            </ul>
            <br />
        </div>
    )
    
}
}

export default Radium(Ticketmaster);
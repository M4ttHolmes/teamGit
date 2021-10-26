import React, { Component } from 'react';
import Location from './GeoLocation';


class Ticketmaster extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            url: 'https://app.ticketmaster.com/discovery/v2/events?',
            key: 'VHKhYGXoMxd7mJA0QBaAJoYBeZZrjLEa',
            lat: '',
            long: ''
        }
    }


componentDidMount = () => {
    console.log("Ticketmaster")
    fetch(`${this.state.url}apikey=${this.state.key}&latlong=${this.props.lat},${this.props.long}`)
    
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
   
};

render() {
    return (
        <div className='main'>
            <ul id='event-name'>
            </ul>
            <br />
        </div>
    )
      
    
}
}

export default Ticketmaster;
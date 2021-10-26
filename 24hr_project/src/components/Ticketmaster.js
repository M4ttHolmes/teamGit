import React from 'react'

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
    .then(json => this.setState({
        events: json._embedded.events
    }))
    .catch(err => console.log(err))
   
};

render() {
    return (
        <div className='main'>
            <h1> Events in the Area: </h1>
            <ul id='event-name'>
            {this.state.events.map((event, key) => {
                    return(
                        <li key={event}><strong>{event.name}</strong> on {event.dates.start.localDate}</li>
                    )
                })}
            </ul>
            <br />
        </div>
    )
    
}
}

export default Ticketmaster;
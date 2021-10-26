import React from 'react';
import Location from './GeoLocation';


class Ticketmaster extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            url: 'https://app.ticketmaster.com/discovery/v2/events/suggest/latlong',
            key: 'eCqUZLBcgktCoAWOpA2UA8P5TYnsFwjI',
            lat: '',
            long: ''
        }
    }


componentDidMount = () => {
    console.log("Ticketmaster")
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
        <div className='main'>
            <ul id='event-name'>
            </ul>
            <br />
        </div>
    )
      
    
}
}

export default Ticketmaster;
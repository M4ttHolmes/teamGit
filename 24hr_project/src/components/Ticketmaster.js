import React from 'react';
import Location from './GeoLocation';


class Ticketmaster extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            url: 'https://app.ticketmaster.com/discovery/v2/suggest',
            key: 'eCqUZLBcgktCoAWOpA2UA8P5TYnsFwjI',
            lat: '',
            long: ''
        }
    }


    componentDidMount = () => {
        console.log("Ticketmaster")
        // console.log(`${this.state.url}&apikey=${this.state.key}`)
        // fetch(`${this.state.url}&apikey=${this.state.key}`)
        fetch("https://app.ticketmaster.com/discovery/v2/events.json?{eCqUZLBcgktCoAWOpA2UA8P5TYnsFwjI}")
        // fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=eCqUZLBcgktCoAWOpA2UA8P5TYnsFwjI")
        
        .then(response => response.json())
        .then(json => console.log(json))
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
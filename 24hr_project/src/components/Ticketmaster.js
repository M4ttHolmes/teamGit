import React from 'react';



class Ticketmaster extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            baseUrl: 'https://app.ticketmaster.com/discovery/v2/suggest/geoPoint',
            apiKey: 'eCqUZLBcgktCoAWOpA2UA8P5TYnsFwjI',
            location: {},
            venue: {},
        }
    }

    componentDidMount() {

        fetch(`$this.state.baseURL`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });

    }

    render() {      
        return (
            <div className='main'>              
                <div className='mainDiv' style={{textAlign: 'center'}}></div>
            </div>
        )
    }
}


export default Ticketmaster;
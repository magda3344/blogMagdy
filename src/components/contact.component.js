import React from "react";
//import Mailto from 'react-mailto';
import { Map, Marker} from 'google-maps-react'; //npm install --save google-maps-react


const mapStyles = {
    width: '50%',
    height: '50%',
};


export default class Contact extends React.Component {

    render() {
        return (<div className="mail-map">
                <strong><a href={"mailto:" + this.props.email}> Email me</a></strong>
                <Map
                    google ={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176}}>
                    <Marker position={{ lat: 48.00, lng: -122.00}}
                    />
                </Map>
            </div>
        );
    }
};


/*<Mailto email="magst33@o2.pl" obfuscate={true}>
                    Email me!
                </Mailto>*/
//https://www.npmjs.com/package/react-mailto

//https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2

//https://developers.google.com/maps/documentation/javascript/get-api-key#get-the-api-key


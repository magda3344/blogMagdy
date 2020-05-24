import React from "react";
//import Mailto from 'react-mailto';
//import { Map, Marker, GoogleApiWrapper} from 'google-maps-react'; //npm install --save google-maps-react
import Iframe from 'react-iframe'; //npm install react-iframe


/*const mapStyles = {
    width: '50%',
    height: '50%',
};
 */

/*export class MapContainer extends React.Component {} //to jest ogólny komponent z netu

export default GoogleApiWrapper({
    apiKey: (AIzaSyBSraOe6x1su6UyZ_7wWGKY5Lb0sS-_NFs)
})(MapContainer)
*/

export default class Contact extends React.Component {
//<div style={{ height: '100vh', width: '100%' }}>

  /*google = (MapContainer) => {  //to działa u mnie gdyby działał klucz- nie aktywowałam go
       GoogleApiWrapper({
           apiKey: (AIzaSyBSraOe6x1su6UyZ_7wWGKY5Lb0sS-_NFs)
       })(MapContainer)
    }
    */

    render() {
        return (<div className="mail-map">
                <strong><a href={"mailto:" + this.props.email}> Email me</a></strong>

            <Iframe
                    url="https://maps.google.com/maps?q=%20Kathmandu%2C%20Nepal&amp;ie=UTF8&amp;z=13&amp;output=embed"
                    //https://maps.google.com/maps?q=Chlodna%2051%20Warszawa%2C%20Polska&amp;ie=UTF8&amp;z=13&amp;output=embed
                    width='100%'
                    height='300px'
                    scrolling='yes'/>

                {/* <Map
                   // bootstrapURLKeys={{ key: AIzaSyBSraOe6x1su6UyZ_7wWGKY5Lb0sS-_NFs}}
                    google ={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176}}>
                    <Marker position={{ lat: 48.00, lng: -122.00}}
                    />
                </Map>*/}

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

//https://pomoc.nazwa.pl/baza-wiedzy/narzedzia/panel-kreatora-www-i-kreatora-www-pro/jak-wkleic-klucz-google-maps-api/

//https://www.npmjs.com/package/google-maps-react
//https://www.npmjs.com/package/google-map-react

// http://www.whirp.org/socialmedia/google/querystrings.htm



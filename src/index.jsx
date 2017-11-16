import React from 'react';
import ReactDOM from 'react-dom';
import {HelloF, HelloF2, HelloC} from './Hello.jsx';
import GoogleMap from 'google-map-react';

const SomeComponent = ({text}) => <button>{text}</button>;

const element = <div style={{width: '100%', height: '100%'}}> 
    <GoogleMap defaultCenter={{lat: 60.186, lng: 24.831}} defaultZoom={15}>
        <SomeComponent lat={60.187} lng={24.832} text={"Text"} />
    </GoogleMap>
</div>;

ReactDOM.render(element, document.getElementById('app'));

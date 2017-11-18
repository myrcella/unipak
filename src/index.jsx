import React from 'react';
import ReactDOM from 'react-dom';
import { HelloF, HelloF2, HelloC } from './Hello';

const element = (
  <div>
    <HelloF name="Anssi" />
    <HelloF2 name="Saga" />
    <HelloC name="Kaarlo" />
  </div>);

ReactDOM.render(element, document.getElementById('app'));

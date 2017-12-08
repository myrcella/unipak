import React from 'react';
import { LatLonEllipsoidal as LatLon } from 'geodesy';
import { Button } from 'react-bootstrap';

export default class Popup extends React.Component {
  showDetails = () => {
    this.props.showDetails(this.props.delivery);
  }

  render() {
    const { delivery } = this.props;
    const loc = new LatLon(delivery.location.lat, delivery.location.lng);
    const dest = new LatLon(delivery.destination.lat, delivery.destination.lng);
    // const bearing = loc.initialBearingTo(dest); // for arrow
    const distance = loc.distanceTo(dest);
    const distanceUnit = distance > 995 ? 'km' : 'm';
    const distanceInUnit = distance > 995 ? distance / 1000 : distance;
    // Extra number wrapper to prevent scientific notation when distanceInUnit > 100
    const distanceString = Number((distanceInUnit).toPrecision(2));
    return (
      <div className="mapPopup" style={{ transform: 'translate(-50%)', display: 'inline-block' }}>
        Name: {delivery.name}<br />
        To: {delivery.destinationName}<br />
        Distance: {distanceString} {distanceUnit}<br />
        Deliver after: {delivery.deliverEarliest.calendar()}<br />
        Reward: {delivery.reward} €<br />
        <Button bsStyle="uniGr" onClick={this.showDetails}>Show details</Button>
      </div>
    );
  }
}

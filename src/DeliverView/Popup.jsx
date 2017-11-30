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
    const bearing = loc.initialBearingTo(dest);
    const distance = loc.distanceTo(dest);
    return (
      <div className="mapPopup" style={{ transform: 'translate(-50%)', display: 'inline-block' }}>
        Name: {delivery.name}<br />
        Bearing: {Number(bearing).toFixed(0)}°<br />
        Distance: {Number(distance).toFixed(0)} m<br />
        Deliver by: {delivery.deliverLatest.calendar()}
        <Button onClick={this.showDetails}>Show details</Button>
      </div>
    );
  }
}

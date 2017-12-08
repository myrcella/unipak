import React from 'react';
import { LatLonEllipsoidal as LatLon } from 'geodesy';
import { Button } from 'react-bootstrap';

export default function Details({ delivery, closeDetails }) {
  const loc = new LatLon(delivery.location.lat, delivery.location.lng);
  const dest = new LatLon(delivery.destination.lat, delivery.destination.lng);
  const distance = loc.distanceTo(dest);
  const distanceUnit = distance > 995 ? 'km' : 'm';
  const distanceInUnit = distance > 995 ? distance / 1000 : distance;
  // Extra number wrapper to prevent scientific notation when distanceInUnit > 100
  const distanceString = Number((distanceInUnit).toPrecision(2));
  return (
    <div>
      <h2>&quot;{delivery.name}&quot;</h2>
      <p><b>Description:</b> {delivery.description}</p>
      <p><b>Size category:</b> {delivery.sizeClass}</p>
      <p><b>From:</b> {delivery.locationAddress}</p>
      <p><b>To:</b> {delivery.destinationAddress}, {delivery.destinationName}</p>
      <p><b>Distance:</b> {distanceString} {distanceUnit}</p>
      <p><b>Deliver after:</b> {delivery.deliverEarliest.calendar()}</p>
      <p><b>Available until:</b> {delivery.availableUntil.calendar()}</p>
      <p><b>Reward:</b> {delivery.reward} €</p>
      <Button block bsSize="lg" bsStyle="uniOr" onClick={closeDetails}>
        Back to map
      </Button>
    </div>);
}

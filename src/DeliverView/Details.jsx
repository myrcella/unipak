import React from 'react';
import { Button } from 'react-bootstrap';

export default function Details({ delivery, closeDetails }) {
  return (
    <div>
      <h2>&quot;{delivery.name}&quot;</h2>
      <p><b>Description:</b> {delivery.description}</p>
      <p><b>Size category:</b> {delivery.sizeClass}</p>
      <p><b>From:</b> {delivery.locationAddress}</p>
      <p><b>To:</b> {delivery.destinationAddress}, {delivery.destinationName}</p>
      <p><b>Deliver after:</b> {delivery.deliverEarliest.calendar()}</p>
      <p><b>Available until:</b> {delivery.availableUntil.calendar()}</p>
      <p><b>Reward:</b> {delivery.reward} €</p>
      <Button block bsSize="lg" bsStyle="uniOr" onClick={closeDetails}>
        Back to map
      </Button>
    </div>);
}

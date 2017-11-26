import React from 'react';
import { Button } from 'react-bootstrap';

export default class DeliverMapPopup extends React.Component {
  showDetails = (event) => {
    event.stopPropagation();
    this.props.showDetails(this.props.delivery);
  }

  render() {
    return (
      <div>
        TODO: DeliverMapPopup {this.props.delivery.name}
        <Button onClick={this.showDetails}>Show details</Button>
      </div>
    );
  }
}

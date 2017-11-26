import React from 'react';
import { Button } from 'react-bootstrap';

export default class DeliverMapPopup extends React.Component {
  showDetails = () => {
    this.props.showDetails(this.props.delivery);
  }

  render() {
    return (
      <div className="mapPopup" style={{ transform: 'translate(-50%)', display: 'inline-block' }}>
        TODO: DeliverMapPopup {this.props.delivery.name}
        <Button onClick={this.showDetails}>Show details</Button>
      </div>
    );
  }
}

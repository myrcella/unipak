import React from 'react';

export default class DeliverMapMarker extends React.Component {
  openDetails = () => {
    this.props.showDetails(this.props.delivery);
  }

  render() {
    return (
      <input
        type="button"
        value={`TODO: MapMarker ${this.props.delivery.name}`}
        onClick={this.openDetails}
      />);
  }
}

import React from 'react';
import DeliveryDetails from './DeliveryDetails';
import DeliverMapMarker from './DeliverMapMarker';

export default class DeliverView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveryDetails: null,
    };
  }

  showDetails = (delivery) => {
    this.setState({ deliveryDetails: delivery });
  }

  closeDetails = () => {
    this.setState({ deliveryDetails: null });
  }

  render() {
    if (this.state.deliveryDetails) {
      return (<DeliveryDetails
        delivery={this.state.deliveryDetails}
        closeDetails={this.closeDetails}
      />);
    }
    return (
      <div>
        TODO: DeliverView<br />
        <input
          type="button"
          value="Send something"
          onClick={this.props.showSendView}
        />
        {this.props.deliveries.map(delivery =>
          (<DeliverMapMarker
            delivery={delivery}
            showDetails={this.showDetails}
            key={delivery.id}
          />))}
      </div>);
  }
}

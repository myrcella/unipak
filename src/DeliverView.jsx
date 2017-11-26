import React from 'react';
import DeliveryDetails from './DeliveryDetails';
import DeliverMapMarker from './DeliverMapMarker';
import DeliverMapPopup from './DeliverMapPopup';

export default class DeliverView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveryPopup: null,
      deliveryDetails: null,
    };
  }

  showPopup = (delivery) => {
    this.setState({ deliveryPopup: delivery });
  }

  closePopup = () => {
    this.setState({ deliveryPopup: null });
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
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      // No time to make this demo blind people compatible
      <div onClick={this.closePopup} role="presentation">
        TODO: DeliverView<br />
        <input
          type="button"
          value="Send something"
          onClick={this.props.showSendView}
        />
        {this.props.deliveries.map(delivery => (
          <DeliverMapMarker
            delivery={delivery}
            showPopup={this.showPopup}
            key={delivery.id}
          >
            {delivery === this.state.deliveryPopup
            ?
              <DeliverMapPopup
                delivery={delivery}
                showDetails={this.showDetails}
              />
            : null}
          </DeliverMapMarker>
        ))}
      </div>);
  }
}

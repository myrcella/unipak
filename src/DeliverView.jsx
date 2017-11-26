import React from 'react';
import GoogleMap from 'google-map-react';
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
      <div
        style={{ height: '80%' }}
      >
        TODO: DeliverView<br />
        <input
          type="button"
          value="Send something"
          onClick={this.props.showSendView}
        />
        <GoogleMap
          onClick={this.closePopup}
          defaultCenter={{ lat: 60.186, lng: 24.831 }}
          defaultZoom={15}
        >
          {this.props.deliveries.map(delivery => (
            <DeliverMapMarker
              delivery={delivery}
              showPopup={this.showPopup}
              key={delivery.id}
              lat={delivery.location.lat}
              lng={delivery.location.lng}
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
        </GoogleMap>
      </div>);
  }
}

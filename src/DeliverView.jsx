import React from 'react';
import GoogleMap from 'google-map-react';
import DeliveryDetails from './DeliveryDetails';
import DeliverMapMarker from './DeliverMapMarker';
import DeliverMapPopup from './DeliverMapPopup';
import DeliverViewBanner from './DeliverViewBanner';

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
    const detailsView = (
      <DeliveryDetails
        delivery={this.state.deliveryDetails}
        closeDetails={this.closeDetails}
      />
    );
    return (
      <div style={{ height: '100%' }}>
        <div
          style={{
            height: '100%',
            display: this.state.deliveryDetails ? 'none' : 'flex',
            flexDirection: 'column',
          }}
        >
          <DeliverViewBanner />
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
        </div>
        { this.state.deliveryDetails ? detailsView : null}
      </div>
    );
  }
}

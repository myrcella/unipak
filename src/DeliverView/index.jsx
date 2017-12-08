import React from 'react';
import GoogleMap from 'google-map-react';
import Details from './Details';
import Marker from './Marker';
import Popup from './Popup';
import ButtonBar from './ButtonBar';
import MapBanner from './MapBanner';
import TopBanner from '../util/TopBanner';


function createMapOptions() {
  return {
    clickableIcons: false,
    fullscreenControl: false,
    scaleControl: true,
    styles: [
      {
        featureType: 'poi',
        stylers: [{ visibility: 'on' }],
      },
    ],
  };
}

// Shallow compare sees different object and doesn't realize values are same.
// Const object outside render() avoids warning.
const defaultCenter = { lat: 60.1863, lng: 24.8271 };

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
    const bannerText = this.state.deliveryDetails ?
      'Deliver this?' :
      'What would you like to do?';

    const detailsView = this.state.deliveryDetails ?
      (
        <Details
          delivery={this.state.deliveryDetails}
          closeDetails={this.closeDetails}
        />
      ) : null;

    const buttonBar = this.state.deliveryDetails ?
      null :
      <ButtonBar showSendView={this.props.showSendView} />;

    const mapBanner = this.state.deliveryDetails ?
      null :
      <MapBanner />;

    const markers = this.props.deliveries.map(delivery =>
      (
        <Marker
          delivery={delivery}
          showPopup={this.showPopup}
          key={delivery.id}
          lat={delivery.location.lat}
          lng={delivery.location.lng}
        >
          {delivery === this.state.deliveryPopup
          ?
            <Popup
              delivery={delivery}
              showDetails={this.showDetails}
            />
          : null}
        </Marker>
      ));

    // Map is hidden instead of removing to prevent it from reloading when closing details view
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <TopBanner text={bannerText} />
        {detailsView}
        {buttonBar}
        {mapBanner}
        <GoogleMap
          style={{
            display: this.state.deliveryDetails ? 'none' : null,
            flex: 1,
            position: 'relative',
          }}
          onClick={this.closePopup}
          options={createMapOptions}
          defaultCenter={defaultCenter}
          defaultZoom={15}
        >
          {markers}
        </GoogleMap>
      </div>
    );
  }
}

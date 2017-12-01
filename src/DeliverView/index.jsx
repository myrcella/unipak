import React from 'react';
import GoogleMap from 'google-map-react';
import Details from './Details';
import Marker from './Marker';
import Popup from './Popup';
import ButtonBar from './ButtonBar';
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
        <GoogleMap
          style={{
            display: this.state.deliveryDetails ? 'none' : null,
            flex: 1,
            position: 'relative',
          }}
          onClick={this.closePopup}
          options={createMapOptions}
          defaultCenter={{ lat: 60.186, lng: 24.831 }}
          defaultZoom={15}
        >
          {markers}
        </GoogleMap>
      </div>
    );
  }
}

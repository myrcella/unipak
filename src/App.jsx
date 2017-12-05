import React from 'react';
import Auth from './Auth';
import SendView from './SendView';
import DeliverView from './DeliverView';
import * as fake from './FakeData';
import './util/bsCustomButton'; // This just needs to be imported once somewhere in the App

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null, // Will be defined after registration / login
      deliveries: null, // From server / fake data, after login
      showSendView: false,
    };
  }

  setUser = (user) => {
    this.setState({
      user,
      deliveries: fake.deliveries,
    });
  }

  showSendView = () => {
    this.setState({ showSendView: true });
  }

  hideSendView = () => {
    this.setState({ showSendView: false });
  }

  submitDelivery = () => {
    // TODO record deliveries sent by user
    this.hideSendView();
  }

  render() {
    if (!this.state.user) {
      return <Auth setUser={this.setUser} />;
    }

    if (this.state.showSendView) {
      return (
        <SendView
          hideSendView={this.hideSendView}
          submitDelivery={this.submitDelivery}
        />
      );
    }

    return (
      <DeliverView
        deliveries={this.state.deliveries}
        showSendView={this.showSendView}
      />
    );
  }
}

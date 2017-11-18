import React from 'react';
import Auth from './Auth';
import SendView from './SendView';
import DeliverView from './DeliverView';

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
    this.setState({ user });
  }

  showSendView = () => {
    this.setState({ showSendView: true });
  }

  hideSendView = () => {
    this.setState({ showSendView: false });
  }

  render() {
    if (!this.state.user) {
      return <Auth setUser={this.setUser} />;
    }
    if (this.state.showSendView) {
      return <SendView hideSendView={this.hideSendView} />;
    }
    return (<DeliverView
      deliveries={this.state.deliveries}
      showSendView={this.showSendView}
    />);
  }
}

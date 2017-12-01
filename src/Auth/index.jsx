import React from 'react';
import BasicInfo from './BasicInfo';
import StrongAuth from './StrongAuth';
import PaymentMethod from './PaymentMethod';
import Customization from './Customization';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);

    // Try to restore the info saved before navigating to bank page
    const bankReturn = window.location.hash.match(/^#strongauth=(success|cancel)$/);
    const savedState = window.localStorage.getItem('authState');
    if (bankReturn && savedState) {
      window.localStorage.removeItem('authState');
      window.location.hash = '';
      this.state = JSON.parse(savedState);
      const bankStatus = bankReturn[1];
      if (bankStatus === 'success') {
        this.state.strongAuth = {};
      } else if (bankStatus === 'cancel') {
        this.state.strongAuthCancel = true;
      }
    } else {
      this.state = {
        userInfo: null,
        strongAuth: null,
        paymentMethod: null,
      };
    }
  }

  setUserInfo = (userInfo) => {
    this.setState({ userInfo });
  }

  setPaymentMethod = (paymentMethod) => {
    this.setState({ paymentMethod });
  }

  startStrongAuth = () => {
    // Save info we have so far before navigating to bank page
    window.localStorage.setItem('authState', JSON.stringify(this.state));
    window.location.assign('./bank.html');
  }

  skipStrongAuth = () => {
    this.setState({ strongAuth: 'skip' });
  }

  login = (customization) => {
    // We have all the data now, pass it to App
    this.props.setUser({
      info: this.state.userInfo,
      strongAuth: this.state.strongAuth,
      paymentMethod: this.state.paymentMethod,
      customization,
    });
  }

  render() {
    if (!this.state.userInfo) {
      return <BasicInfo setUserInfo={this.setUserInfo} />;
    }
    if (!this.state.strongAuth) {
      return (
        <StrongAuth
          start={this.startStrongAuth}
          skip={this.skipStrongAuth}
          cancelled={this.state.strongAuthCancel}
        />
      );
    }
    if (!this.state.paymentMethod) {
      return <PaymentMethod setPaymentMethod={this.setPaymentMethod} />;
    }
    return <Customization setCustomization={this.login} />;
  }
}

import React from 'react';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);

    // Try to restore the info saved before navigating to bank page
    const savedState = window.localStorage.getItem('authState');
    if (savedState && window.location.hash.includes('strongauth=success')) {
      this.state = JSON.parse(savedState);
      window.localStorage.removeItem('authState');
      this.state.strongAuth = {};
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
      return (
        <form>
          TODO: Auth: basic info
        </form>
      );
    }
    if (!this.state.strongAuth) {
      return (
        <form>
          TODO: Auth: strong auth
        </form>
      );
    }
    if (!this.state.paymentMethod) {
      return (
        <form>
          TODO: Auth: payment method
        </form>
      );
    }
    return (
      <form>
          TODO: Auth: customization
      </form>
    );
  }
}

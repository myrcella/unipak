import React from 'react';
import { Button } from 'react-bootstrap';

export default class PaymentMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  skip = () => {
    this.props.setPaymentMethod('skip');
  }

  render() {
    return (
      <form>
        TODO: Auth: payment method<br />
        <Button onClick={this.skip}>Skip for now</Button>
      </form>
    );
  }
}

import React from 'react';
import { Button } from 'react-bootstrap';
import TopBanner from '../util/TopBanner';

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
        <TopBanner text="Payment details" />
        TODO: Auth: payment method<br />
        <Button onClick={this.skip}>Skip for now</Button>
      </form>
    );
  }
}

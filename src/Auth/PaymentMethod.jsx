import React from 'react';
import { Button } from 'react-bootstrap';
import FieldGroup from '../util/FieldGroup';
import TopBanner from '../util/TopBanner';

export default class PaymentMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      securityCode: '',
      expMonth: '',
      expYear: '',
    };
  }

  handleChange = (event) => {
    const input = event.target;
    const key = input.name;

    this.setState({
      [key]: input.value,
    });
  }

  handleSubmit = (event) => {
    // TODO Validation
    // State object should match what setUserInfo expects
    this.props.setPaymentMethod(this.state);
    event.preventDefault();
  }

  skip = () => {
    this.props.setPaymentMethod('skip');
  }

  render() {
    return (
      <div>
        <TopBanner text="Payment details" />
        <form onSubmit={this.handleSubmit}>
          <h2>Before you can send packages, we need to know your payment details</h2>
          <FieldGroup
            name="cardNumber"
            type="number"
            label="Card number"
            value={this.state.cardNumber}
            onChange={this.handleChange}
          />
          <FieldGroup
            name="securityCode"
            type="number"
            label="Security code"
            value={this.state.securityCode}
            onChange={this.handleChange}
          />
          <FieldGroup
            name="expMonth"
            type="number"
            label="Expiration month"
            value={this.state.expMonth}
            onChange={this.handleChange}
          />
          <FieldGroup
            name="expYear"
            type="number"
            label="Expiration year"
            value={this.state.expYear}
            onChange={this.handleChange}
          />
          <Button block bsSize="lg" bsStyle="uniGr" type="submit">Next</Button>
          <p>If you don&apos;t plan to send packages or want to do this later:</p>
          <Button block bsSize="lg" bsStyle="uniOr" onClick={this.skip}>Skip for now</Button>
        </form>
      </div>
    );
  }
}

import React from 'react';
import { Button, InputGroup, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import Moment from 'moment';
import FieldGroup from './util/FieldGroup';
import TopBanner from './util/TopBanner';

export default class SendView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromAddress: '',
      toAddress: '',
      content: '',
      date: '',
      time: '',
      offer: '3.00', // Default offer
    };
  }

  handleChange = (event) => {
    const input = event.target;
    const key = input.name;
    let value = input.type === 'checkbox' ? input.checked : input.value;

    if (input.type === 'date') {
      value = Moment(value, 'YYYY-MM-DD');
    }

    if (input.type === 'time') {
      value = Moment(value, 'HH:mm');
    }

    this.setState({
      [key]: value,
    });
  }

  handleSubmit = (event) => {
    // TODO Validation
    // State object should match what submitDelivery expects
    this.props.submitDelivery(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <TopBanner text="Send something" />
        <form onSubmit={this.handleSubmit}>
          <FieldGroup
            name="fromAddress"
            type="text"
            label="From address"
            help="Where should the package be picked up from"
            value={this.state.fromAddress}
            onChange={this.handleChange}
          />
          <FieldGroup
            name="toAddress"
            type="text"
            label="To address"
            help="Where do you want it dropped off"
            value={this.state.toAddress}
            onChange={this.handleChange}
          />
          <FieldGroup
            name="content"
            type="text"
            label="Content"
            help="Describe the content (i.e. 'electronics')"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <FieldGroup
            name="date"
            type="date"
            label="Date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <FieldGroup
            name="time"
            type="time"
            label="Time"
            value={this.state.time}
            onChange={this.handleChange}
          />
          <FormGroup controlId="offer">
            <ControlLabel>Offer</ControlLabel>
            <InputGroup>
              <FormControl name="offer" type="number" step="0.01" min="0" value={this.state.offer} onChange={this.handleChange} />
              <InputGroup.Addon>€</InputGroup.Addon>
            </InputGroup>
            <HelpBlock>
              How much are you willing to pay for this delivery.
              Larger offers are more likely to be selected by a deliveryman.
            </HelpBlock>
          </FormGroup>
          <Button bsClass="btn btn-lg btnGr btnUni" type="submit" block>
            Submit
          </Button>
          <Button bsClass="btn btn-lg btnOr btnUni" type="button" block onClick={this.props.hideSendView}>
            Back
          </Button>
        </form>
      </div>);
  }
}

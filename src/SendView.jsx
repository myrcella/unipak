import React from 'react';
import { Checkbox, Button } from 'react-bootstrap';
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
			offer: '',
		};
  }

  handleChange = (event) => {
    const input = event.target;
    const key = input.name;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    this.setState({
      [key]: value,
    });
  }

  handleSubmit = (event) => {
    // TODO Validation
    // State object should match what setDeliveryInfo expects
    this.props.setDeliveryInfo(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <TopBanner text="Send something" />
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
        <Button bsClass="btn btn-lg btnGr btnUni" type="submit" block>
          Submit
        </Button>
        <Button bsClass="btn btn-lg btnOr btnUni" type="button" block>
          Back
        </Button>
      </div>);
  }
}

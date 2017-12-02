import React from 'react';
import { Checkbox, Button } from 'react-bootstrap';
import FieldGroup from '../util/FieldGroup';
import TopBanner from '../util/TopBanner';

export default class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      realName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      termsAccepted: false,
      newsletter: false,
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
    // State object should match what setUserInfo expects
    this.props.setUserInfo(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TopBanner text="Welcome!" />
        <FieldGroup
          name="userName"
          type="text"
          label="Username"
          help="Your username will be visible to all users."
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <FieldGroup
          name="realName"
          type="text"
          label="Real name"
          help="Your real name will only be visible to those users you interact with."
          value={this.state.realName}
          onChange={this.handleChange}
        />
        <FieldGroup
          name="email"
          type="email"
          label="E-mail"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <FieldGroup
          name="phone"
          type="tel"
          label="Phone number"
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <FieldGroup
          name="dateOfBirth"
          type="date"
          label="Date of birth"
          value={this.state.dateOfBirth}
          onChange={this.handleChange}
        />
        <Checkbox name="termsAccepted" value={this.state.termsAccepted} onChange={this.handleChange}>
          I agree to Unipak Terms and Conditions
        </Checkbox>
        <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange}>
          I wish to receive Unipak newsletter
        </Checkbox>
        <Button bsClass="btn btn-lg btnGr btnUni" type="submit" block>
          Next
        </Button>
      </form>
    );
  }
}

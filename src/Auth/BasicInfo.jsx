import React from 'react';
import { Checkbox, Button } from 'react-bootstrap';
import FieldGroup from '../util/FieldGroup';

export default class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event) => {
    const input = event.target;
    const key = input.name;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    this.setState({
      [key]: value,
    });
  }

  render() {
    return (
      <form>
        TODO: Auth: basic info
        <FieldGroup
          name="username"
          type="text"
          label="Username"
          help="Your username will be visible to all users."
          value={this.state.username}
          onChange={this.handleChange}
        />
        <FieldGroup
          name="realname"
          type="text"
          label="Real name"
          help="Your real name will only be visible to those users you interact with."
          value={this.state.realname}
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
        <Checkbox name="terms" value={this.state.terms} onChange={this.handleChange}>
          I agree to Unipak Terms and Conditions
        </Checkbox>
        <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange}>
          I wish to receive Unipak newsletter
        </Checkbox>
        <Button type="submit">
          Next
        </Button>
      </form>
    );
  }
}

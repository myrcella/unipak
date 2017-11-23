import React from 'react';
import { Checkbox, Button } from 'react-bootstrap';
import FieldGroup from '../util/FieldGroup';

export default class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        TODO: Auth: basic info
        <FieldGroup
          id="formUsername"
          type="text"
          label="Username"
          help="Your username will be visible to all users."
        />
        <FieldGroup
          id="formRealname"
          type="text"
          label="Real name"
          help="Your real name will only be visible to those users you interact with."
        />
        <FieldGroup
          id="formEmail"
          type="email"
          label="E-mail"
        />
        <FieldGroup
          id="formPhone"
          type="tel"
          label="Phone number"
        />
        <FieldGroup
          id="formDOB"
          type="date"
          label="Date of birth"
        />
        <Checkbox>
          I agree to Unipak Terms and Conditions
        </Checkbox>
        <Checkbox>
          I wish to receive Unipak newsletter
        </Checkbox>
        <Button type="submit">
          Next
        </Button>
      </form>
    );
  }
}
